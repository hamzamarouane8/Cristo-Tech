import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import { Select } from 'semantic-ui-react';
import isFunction from 'lodash.isfunction';
import isArray from 'lodash.isarray';
import isString from 'lodash.isstring';
import get from 'lodash.get';
import template from 'lodash.template';
import styled from 'styled-components'; // import 'semantic-ui-css/components/dropdown.css';

export default (function (_ref) {
  var name = _ref.name,
      placeholder = _ref.placeholder,
      loading = _ref.loading,
      options = _ref.options,
      value = _ref.value,
      _onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      fluid = _ref.fluid,
      metas = _ref.metas,
      required = _ref.required;

  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      _options = _React$useState2[0],
      _setOptions = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      _loading = _React$useState4[0],
      _setLoading = _React$useState4[1];

  React.useEffect(function () {
    if (isFunction(options)) {
      _setLoading(true);

      options().then(function (data) {
        var d = data;

        if (d && metas && (metas.labelField || metas.valueField)) {
          d = data.map(function (record) {
            var text = '';

            if (metas.labelField && metas.labelField.indexOf('${') > -1) {
              var tpl = template(metas.labelField);
              text = tpl(_objectSpread({}, record));
            } else if (isFunction(metas.labelField)) {
              text = metas.labelField(record);
            } else {
              text = get(record, metas.labelField || 'text');
            }

            return {
              value: get(record, metas.valueField || 'id'),
              text: text
            };
          });
        }

        _setOptions(d);
      })["finally"](function () {
        _setLoading(false);
      });
    } else if (isArray(options)) {
      _setOptions(options.map(function (item) {
        if (isString(item)) return {
          value: item,
          text: item
        };
        return {
          value: item.value || item.id || item.key,
          text: item.label || item.text
        };
      }));
    } else {
      return [];
    }
  }, []);
  return React.createElement(SelectStyled, {
    placeholder: placeholder,
    options: _options,
    loading: loading || _loading,
    name: name,
    clearable: required !== true,
    fluid: fluid !== false,
    onChange: function onChange(evt, data) {
      _onChange(_objectSpread({}, evt, {
        target: {
          name: name,
          value: data.value
        }
      }));
    },
    value: value || ''
  });
});
var SelectStyled = styled(Select).withConfig({
  displayName: "FieldSelect__SelectStyled",
  componentId: "sc-17li8qn-0"
})([".default.text{padding-top:3px;}.dropdown.icon{margin-top:3px;}"]);