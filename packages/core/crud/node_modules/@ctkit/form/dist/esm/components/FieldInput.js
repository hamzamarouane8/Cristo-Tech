import React from 'react';
import { Input } from 'semantic-ui-react';
import { Sizes } from '@ctkit/constants'; // import 'semantic-ui-css/components/input.css'

export default (function (_ref) {
  var name = _ref.name,
      fluid = _ref.fluid,
      size = _ref.size,
      width = _ref.width,
      _onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      type = _ref.type,
      value = _ref.value,
      loading = _ref.loading,
      description = _ref.description,
      placeholder = _ref.placeholder,
      icon = _ref.icon,
      disabled = _ref.disabled;
  var _size = null;

  if (_size === Sizes.XS) {
    _size = 'mini';
  }

  return React.createElement(Input, {
    name: name,
    fluid: fluid !== false,
    onChange: function onChange(evt) {
      evt.preventDefault();

      _onChange(evt);
    },
    onBlur: onBlur,
    size: _size,
    icon: icon,
    type: type,
    disabled: disabled,
    style: {
      width: width
    },
    value: value || '',
    loading: loading,
    description: description,
    placeholder: placeholder
  });
});