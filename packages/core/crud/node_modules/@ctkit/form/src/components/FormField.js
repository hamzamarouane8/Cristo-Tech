import React from 'react'
import { FormConsumer } from '../support/context';
import { Col } from '@ctkit/layout';
import Field from './Field';

export default ({ name, spans, span, compact }) => (
    <FormConsumer>
      {({fields, touched, size, values, errors, handleBlur, handleChange, setFieldValue}) => {

        return(
        <Col span={spans === false ? 12 : (span || fields[name].span || 12)}>
          <Field {...fields[name]}
                 error={touched[name] && errors[name]}
                 name={name}
                 compact={compact}
                 size={size}
                 setFieldValue={(name, value) => {
                   setFieldValue(name, value);
                   if (fields[name].onChange) {
                     fields[name].onChange(value)
                   }
                 }
                 }
                 onChange={handleChange}
            /* onChange={(name, value) => {
               handleChange(name, value)
             }}*/
                 onBlur={handleBlur}
                 value={values && values[name]}/>
        </Col>
      )}}
    </FormConsumer>
  );
