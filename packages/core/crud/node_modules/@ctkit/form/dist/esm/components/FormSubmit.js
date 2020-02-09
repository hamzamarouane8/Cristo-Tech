import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { connect } from 'formik';
import { FormConsumer } from '../support/context';
import Button from '@ctkit/button';
export default connect(function (_ref) {
  var children = _ref.children,
      _ref$formik = _ref.formik,
      isSubmitting = _ref$formik.isSubmitting,
      isValid = _ref$formik.isValid,
      props = _objectWithoutProperties(_ref, ["children", "formik"]);

  return React.createElement(FormConsumer, null, function (_ref2) {
    var size = _ref2.size;
    return React.createElement(Button, _extends({
      size: size
    }, props, {
      type: "submit",
      disabled: isSubmitting || !isValid,
      appearance: "primary",
      loading: isSubmitting
    }), children);
  });
});