import React from 'react';
import { Search } from 'semantic-ui-react';
import { Sizes } from '@ctkit/constants';
export default (function (_ref) {
  var name = _ref.name,
      fluid = _ref.fluid,
      size = _ref.size,
      width = _ref.width,
      className = _ref.className,
      _onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      type = _ref.type,
      value = _ref.value,
      loading = _ref.loading,
      description = _ref.description,
      placeholder = _ref.placeholder;
  var _size = null;

  if (_size === Sizes.XS) {
    _size = 'mini';
  }

  return React.createElement(Search, {
    className: className,
    name: name,
    fluid: fluid,
    onChange: function onChange(evt) {
      evt.preventDefault();

      _onChange(evt);
    },
    onBlur: onBlur,
    size: _size,
    type: type,
    style: {
      width: width
    },
    value: value || '',
    loading: loading,
    description: description,
    placeholder: placeholder
  });
});