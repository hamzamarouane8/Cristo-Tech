import React from 'react';
import { connect } from 'formik';
import { FormConsumer } from '../support/context';
import Button from '@ctkit/button';

export default connect(({ children, formik: { isSubmitting, isValid }, ...props }) => {
  return (
    <FormConsumer>
      {({ size }) => (
        <Button size={size} {...props}
                type="submit"
                disabled={isSubmitting || !isValid}
                appearance="primary" loading={isSubmitting}>
          {children}
        </Button>
      )}
    </FormConsumer>
  );
});
