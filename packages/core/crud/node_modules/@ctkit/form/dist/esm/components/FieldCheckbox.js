import React from 'react';
import { Checkbox } from 'semantic-ui-react'; // import 'semantic-ui-css/components/checkbox.css'

export default (function (_ref) {
  var name = _ref.name,
      fluid = _ref.fluid,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      value = _ref.value,
      description = _ref.description,
      label = _ref.label,
      initValue = _ref.initValue,
      checked = _ref.checked,
      setFieldValue = _ref.setFieldValue,
      toggle = _ref.toggle,
      radio = _ref.radio,
      className = _ref.className,
      initvalue = _ref.initvalue;
  return React.createElement(Checkbox //fluid={fluid !== false}
  , {
    onChange: function onChange(event, value) {
      if (value.toggle) {
        setFieldValue(name, value.checked);
      } else {
        setFieldValue(name, value.label);
      }
    },
    className: className,
    checked: checked,
    onBlur: onBlur,
    toggle: toggle || false,
    radio: radio || false,
    value: value || '',
    description: description,
    label: label
  });
});