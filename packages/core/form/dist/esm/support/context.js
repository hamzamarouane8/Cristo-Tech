import React, { createContext } from 'react';
var Form = createContext({});

var FormProvider = function FormProvider(_ref) {
  var value = _ref.value,
      children = _ref.children;
  return React.createElement(Form.Provider, {
    value: value
  }, children);
};

var FormContext = Form;
var FormConsumer = Form.Consumer;
export { FormContext, FormProvider, FormConsumer };