import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { FormConsumer } from '../support/context';
import { Col } from '@ctkit/layout';
import Field from './Field';
export default (function (_ref) {
  var name = _ref.name,
      spans = _ref.spans,
      span = _ref.span,
      compact = _ref.compact;
  return React.createElement(FormConsumer, null, function (_ref2) {
    var fields = _ref2.fields,
        touched = _ref2.touched,
        size = _ref2.size,
        values = _ref2.values,
        errors = _ref2.errors,
        handleBlur = _ref2.handleBlur,
        handleChange = _ref2.handleChange,
        _setFieldValue = _ref2.setFieldValue;
    return React.createElement(Col, {
      span: spans === false ? 12 : span || fields[name].span || 12
    }, React.createElement(Field, _extends({}, fields[name], {
      error: touched[name] && errors[name],
      name: name,
      compact: compact,
      size: size,
      setFieldValue: function setFieldValue(name, value) {
        _setFieldValue(name, value);

        if (fields[name].onChange) {
          fields[name].onChange(value);
        }
      },
      onChange: handleChange
      /* onChange={(name, value) => {
         handleChange(name, value)
       }}*/
      ,
      onBlur: handleBlur,
      value: values && values[name]
    })));
  });
});