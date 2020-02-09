import React from 'react';
import { Table } from 'semantic-ui-react';
import get from 'lodash.get';
import isEmpty from 'lodash.isempty';
import isString from 'lodash.isstring';
import compact from 'lodash.compact';
import styled from 'styled-components';
import { Dates, Numbers } from '@ctkit/commons';
import { Text } from '@ctkit/text';
import Loader from '@ctkit/loader'; // import 'semantic-ui-css/components/table.css';

var EmptyMessage = function EmptyMessage(_ref) {
  var content = _ref.content;

  if (content) {
    return isString(content) ? React.createElement(Text, null, content) : content;
  }

  return React.createElement(Text, null, "Aucune donn\xE9e trouv\xE9e.");
};

var Cell = function Cell(_ref2) {
  var col = _ref2.col,
      record = _ref2.record,
      id = _ref2.id,
      index = _ref2.index;
  var value = get(record, col.name) || '';

  if (col.render) {
    var v = col.name ? col.render(value, {
      record: record,
      id: id,
      index: index
    }) : col.render({
      record: record,
      id: id,
      index: index
    });
    if (isString(v)) return v.trim();
    return v;
  }

  if (col.icon) {
    return React.createElement("div", {
      className: "text-center pull-left",
      style: {
        marginTop: -2
      }
    }, col.icon);
  }

  if (col.type === 'date') {
    value = Dates.parse(value);
    value = Dates.format(new Date(value));
  } else if (col.type === 'number') {
    value = Numbers.format(value);
  }

  if (col.shortLine) {
    value = value.slice(0, col.slice);
  }

  return ((value || col.defaultValue || '') + ' ' + (col.suffix || '')).trim();
};

export default (function (_ref3) {
  var idField = _ref3.idField,
      ds = _ref3.ds,
      columns = _ref3.columns,
      noHeaders = _ref3.noHeaders,
      data = _ref3.data,
      appearance = _ref3.appearance,
      loading = _ref3.loading,
      emptyMessage = _ref3.emptyMessage;
  if (!columns) return null;
  var cColumns = compact(columns);

  var __columns = noHeaders !== true && React.useMemo(function () {
    return React.createElement(Table.Header, null, React.createElement(Table.Row, null, cColumns.map(function (col, index) {
      return React.createElement(Table.HeaderCell, {
        key: col.key || col.name || index,
        textAlign: col.align || 'left'
      }, col.header);
    })));
  }, [columns]);

  var __body = React.useMemo(function () {
    return React.createElement(Table.Body, null, (data || []).map(function (record, recordIndex) {
      var recordId = get(record, idField || 'id') || recordIndex;
      return React.createElement(Table.Row, {
        key: recordId
      }, cColumns.map(function (col) {
        return React.createElement(Table.Cell, {
          width: col.width || (col.icon ? 1 : null),
          textAlign: col.align || 'left',
          key: col.key || col.name
        }, React.createElement("div", {
          className: col.condition ? col.condition(recordId, record) : ''
        }, React.createElement(Cell, {
          col: col,
          record: record,
          id: recordId,
          index: recordIndex
        })));
      }));
    }));
  }, [data]);

  return React.createElement(RootStyle, null, React.createElement(Loader, {
    loading: loading
  }, React.createElement(Table, {
    className: [appearance, noHeaders === true ? 'no-headers' : ''].join(' '),
    unstackable: true
  }, __columns, __body), !loading && isEmpty(data) && React.createElement(EmptyMessage, {
    content: emptyMessage
  })), React.createElement("p", null, "\xA0"));
});
var RootStyle = styled.div.withConfig({
  displayName: "Table__RootStyle",
  componentId: "sc-8bnd6q-0"
})([".ui.table{box-shadow:0 0 1px rgba(67,90,111,0.1),0 2px 4px -2px rgba(67,90,111,0.27);border:none;border-radius:3px;&,th,td{border-radius:0 !important;}th{background:#FFF;font-size:1em;font-weight:500;padding:12px 20px !important;border-top:none;border-bottom:1px solid #CCC;}th,td{&:last-child{border-right:none;}}td{font-size:0.9em;border-bottom:0;padding:10px 20px !important;}&.large{th,td{padding:20px 10px;}th{font-size:0.9em;}td{font-size:1.45em;}}&.no-headers{th,td{padding-left:0 !important;padding-right:0 !important;}}}"]);