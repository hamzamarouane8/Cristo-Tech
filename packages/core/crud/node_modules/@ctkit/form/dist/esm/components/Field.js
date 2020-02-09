import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import includes from 'lodash.includes';
import classnames from 'classnames';
import Button from '@ctkit/button';
import DatePicker from './FieldDate';
import Dropdown from './FieldDropdown';
import Select from './FieldSelect';
import Checkbox from './FieldCheckbox';
import Search from './FieldSearch';
import Input from './FieldInput';
import isEmpty from 'lodash.isempty';
export default (function (_ref) {
  var compact = _ref.compact,
      type = _ref.type,
      error = _ref.error,
      size = _ref.size,
      label = _ref.label,
      required = _ref.required,
      placeholder = _ref.placeholder,
      props = _objectWithoutProperties(_ref, ["compact", "type", "error", "size", "label", "required", "placeholder"]);

  var field = [];
  var _placeholder = placeholder;

  if (!placeholder && label) {
    if (!required) {
      _placeholder = 'Facultatif';
    } else {
      _placeholder = 'Obligatoire';
    }
  }

  if (type === 'checkbox') {
    if (!isEmpty(props.elements)) {
      field = props.elements.map(function (item, index) {
        return [].concat(_toConsumableArray(field), [React.createElement(Checkbox, _extends({}, props, {
          label: item.label,
          checked: item.initValue,
          radio: props.details === 'radio' ? true : false,
          toggle: props.details === 'toggle' ? true : false,
          key: index
        }))]);
      });
    } else {
      field = React.createElement(Checkbox, _extends({}, props, {
        radio: props.details === 'radio' ? true : false,
        toggle: props.details === 'toggle' ? true : false,
        label: label
      }));
    }
  } else if (type === 'search') {
    field = React.createElement(Search, _extends({}, props, {
      placeholder: _placeholder,
      label: label
    }));
  } else if (type === 'date') {
    field = React.createElement(DatePicker, _extends({}, props, {
      placeholder: _placeholder
    }));
  } else if (type === 'select') {
    field = React.createElement(Select, _extends({}, props, {
      placeholder: _placeholder
    }));
  } else if (type === 'dropdown') {
    field = React.createElement(Dropdown, props);
  } else if (!type || includes(['text', 'number', 'password', 'email'], type)) {
    field = React.createElement(Input, _extends({}, props, {
      placeholder: _placeholder,
      type: type
    }));
  } else if (type === 'button') {
    field = React.createElement(Button, {
      type: "reset",
      icon: React.createElement(Icon, {
        name: props.icon
      }),
      onClick: props.onClick
    }, props.labelButton, " ");
  } else {
    throw new Error('Unknown field type: ' + type);
  }

  return React.createElement(Styled, {
    className: props.className || classnames('field-wrapper', size, {
      compact: 'compact'
    })
  }, React.createElement("div", {
    className: "field-label clearfix"
  }, error && React.createElement("div", {
    className: "error-message"
  }, error), label && React.createElement("label", null, label)), field);
});
var Styled = styled.div.withConfig({
  displayName: "Field__Styled",
  componentId: "sc-1wys7kx-0"
})(["&.compact{font-size:0.8em;}label .is-required{font-weight:500;position:relative;margin-top:4px;}.field-label label{float:left;font-family:inherit;margin-bottom:0.15em;font-weight:500;font-size:0.95em;}.field-label .error-message{float:right;color:#e0321c;font-size:0.8em;padding-top:1px}.bp3-input,.ui.dropdown,.ui.input input{border-radius:2px !important;padding-top:0.8em;padding-bottom:0.85em;font-size:0.95em;line-height:1;height:3.3em;&,*,.text{font-weight:500 !important;}&:focus{border-color:#888 !important;}}.ui.search .prompt{border-radius:500rem !important;padding-left:2rem;}.ui.fluid,.ui.fluid .input{width:100%;}.ui.dropdown{min-height:3.3em;.text{margin-top:0.45em !important;&.default{margin-top:0.15em !important;}}.dropdown.icon{margin-top:-0.5em !important;}}&.compact .ui.dropdown{.text{margin-top:0.3em !important;&.default{margin-top:0.03em !important;}}}.ui.dropdown .menu>.item{font-size:1em;}&.large{font-size:1.2em;bp3-input,.ui.dropdown,.ui.input input{}}margin-bottom:1em;"]);