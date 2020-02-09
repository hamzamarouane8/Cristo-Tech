import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { DateInput } from '@blueprintjs/datetime';
import { Dates } from '@ctkit/commons';
import moment from 'moment';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import styled from "styled-components";
export default (function (_ref) {
  var placeholder = _ref.placeholder,
      name = _ref.name,
      className = _ref.className,
      value = _ref.value,
      onBlur = _ref.onBlur,
      _onChange = _ref.onChange;
  var jsDateFormatter = {
    formatDate: function formatDate(date) {
      return Dates.format(date);
    },
    parseDate: function parseDate(str) {
      return Dates.parse(str);
    }
  }; //const dValue = Dates.parse(value);

  var dValue = moment(value, 'YYYY/MM/DD').toDate();
  return React.createElement(DateInputStyled, _extends({
    name: name,
    value: dValue,
    showActionsBar: true,
    inputProps: {
      leftIcon: "calendar"
    },
    className: className,
    disabled: true //defaultValue={value}
    ,
    canClearSelection: true,
    placeholder: placeholder,
    clearButtonText: "Effacer",
    closeOnSelection: true,
    minDate: Dates.minusMonth(3),
    maxDate: Dates.plusYears(2),
    locale: "fr",
    onChange: function onChange(selectedDate) {
      _onChange({
        target: {
          name: name,
          value: Dates.valueOf(selectedDate)
        }
      });
    },
    onBlur: onBlur
  }, jsDateFormatter));
});
var DateInputStyled = styled(DateInput).withConfig({
  displayName: "FieldDate__DateInputStyled",
  componentId: "f6hq2j-0"
})([".bp3-input-group input{background:none;border:none;border-bottom:1px solid #e1dfe4;width:100%;}"]);