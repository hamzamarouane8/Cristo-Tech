import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Table from './Table';
import { PopoverMenu } from '@ctkit/popover';
import { IcMoreVertical, IcEdit, IcTrash } from '@ctkit/icons';
import { Sizes } from '@ctkit/constants';
export default (function (_ref) {
  var schema = _ref.schema,
      columns = _ref.columns,
      onEdit = _ref.onEdit,
      onRemove = _ref.onRemove,
      data = _ref.data,
      props = _objectWithoutProperties(_ref, ["schema", "columns", "onEdit", "onRemove", "data"]);

  return React.useMemo(function () {
    var _columns = columns.concat([{
      key: '______actions',
      align: 'center',
      width: 1,
      render: function render(_ref2) {
        var record = _ref2.record,
            id = _ref2.id;
        return React.createElement(PopoverMenu, {
          items: [{
            text: 'Modifier',
            endIcon: React.createElement(IcEdit, null),
            onClick: function onClick() {
              return onEdit(record);
            }
          }, '-', {
            text: 'Supprimer',
            endIcon: React.createElement(IcTrash, null),
            onClick: function onClick() {
              return onRemove(id);
            }
          }]
        }, React.createElement(IcMoreVertical, {
          size: Sizes.XS
        }));
      }
    }]);

    return React.createElement(Table, _extends({}, props, {
      data: data,
      columns: _columns
    }));
  }, [columns, data]);
});