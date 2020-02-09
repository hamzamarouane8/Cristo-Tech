import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import { Insets } from '@ctkit/layout';
import Table from '@ctkit/table';
import { Pagination } from "semantic-ui-react";
import isEmpty from 'lodash.isempty'; // ------------------------------------------------------------------------------
//import DataExportPopoverMenu from './DataExportPopoverMenu';

export default (function (_ref) {
  var dataList = _ref.dataList,
      todosPerPage = _ref.todosPerPage,
      columns = _ref.columns,
      emptyMessage = _ref.emptyMessage;

  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      _activePage = _useState2[0],
      _setActivePage = _useState2[1];

  var calculPaginationPages = function calculPaginationPages() {
    var count = dataList.length / todosPerPage;
    return count;
  };

  var handlePaginationChange = function handlePaginationChange(e, _ref2) {
    var activePage = _ref2.activePage;
    return _setActivePage(activePage);
  };

  var indexOfLastTodo = _activePage * todosPerPage;
  var indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  console.log('inside TableView ', dataList);
  var currentTodos = dataList.slice(indexOfFirstTodo, indexOfLastTodo);
  return React.createElement(Insets, {
    ml: 10
  }, React.createElement(Table, {
    columns: columns,
    data: currentTodos,
    emptyMessage: emptyMessage,
    loading: dataList.loading
  }), !isEmpty(dataList) && dataList.length / todosPerPage > 1 && React.createElement("div", {
    className: "actions"
  }, React.createElement(Pagination, {
    activePage: _activePage,
    onPageChange: handlePaginationChange,
    totalPages: calculPaginationPages()
  })));
});