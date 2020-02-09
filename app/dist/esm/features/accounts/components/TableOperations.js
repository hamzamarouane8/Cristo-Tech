import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import { TableStyle } from '../../../assets/styles/table';
import TableView from '../../../components/TableView'; //-------------------------------------------------------

var dateFormat = function dateFormat(date) {
  var dateFinal = date.slice(0, 10);
  return dateFinal;
};

export default (function (_ref) {
  var data = _ref.data,
      handleAllOperations = _ref.handleAllOperations;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      _allOperations = _useState2[0],
      _setAllOperations = _useState2[1];

  var columns = [{
    "header": "Date d'operation",
    "name": "operationDate",
    render: function render(value, record) {
      return dateFormat(value);
    }
  }, {
    "header": "Date de valeur",
    "name": "valueDate",
    render: function render(value, record) {
      return dateFormat(value);
    }
  }, {
    "header": "Motif",
    "name": "label"
  }, {
    "header": "Montant",
    "name": "amount",
    condition: function condition(value, record) {
      return record.amount < 0 ? 'negative' : 'positive';
    },
    render: function render(value, record) {
      return "".concat(record.record.amount < 0 ? '' : '+', " ").concat(record.record.amount, " ").concat(record.record.currency);
    }
  }, {
    "header": "Etat",
    "name": "status",
    render: function render(value) {
      return value === 'in progress' ? "en cours" : "effectue\xE9";
    },
    condition: function condition(value) {
      return value === 'in progress' ? "status-progress" : "status-done";
    }
  }];
  return React.createElement(TableStyle, null, React.createElement("div", {
    className: "sg-table"
  }, React.createElement("div", {
    className: "widget-title"
  }, "Derni\xE9res op\xE9rations"), React.createElement("div", {
    className: "table-container"
  }, React.createElement(TableView, {
    todosPerPage: 10,
    columns: columns,
    dataList: data || []
  }))));
});