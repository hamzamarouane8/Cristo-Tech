import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import isFunction from 'lodash.isfunction';
import isArray from 'lodash.isarray';
import isEmpty from 'lodash.isempty';
import isString from 'lodash.isstring';
import get from 'lodash.get';
import template from 'lodash.template';
import styled from 'styled-components';
export default (function (_ref) {
  var name = _ref.name,
      placeholder = _ref.placeholder,
      loading = _ref.loading,
      options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      fluid = _ref.fluid,
      metas = _ref.metas,
      required = _ref.required,
      setFieldValue = _ref.setFieldValue,
      initValue = _ref.initValue,
      disabled = _ref.disabled;
  return React.createElement(DropdownStyled, {
    placeholder: placeholder,
    options: options,
    name: name,
    defaultValue: initValue,
    selection: true,
    fluid: true,
    disabled: disabled,
    onChange: function onChange(event, value) {
      setFieldValue(name, value.value);
    }
  });
});
var DropdownStyled = styled(Dropdown).withConfig({
  displayName: "FieldDropdown__DropdownStyled",
  componentId: "sc-148rhil-0"
})([".default.text{padding-top:3px;}.dropdown.icon{margin-top:3px;}"]);