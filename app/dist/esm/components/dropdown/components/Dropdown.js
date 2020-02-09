import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Dropdown } from 'semantic-ui-react';

var DropdownDrop = function DropdownDrop(_ref) {
  var items = _ref.items;
  if (isEmpty(items)) return null;
  return items.map(function (item, id) {
    return React.createElement(React.Fragment, null, React.createElement(Dropdown.Item, {
      className: item.className,
      onClick: item.onClick
    }, item.text), React.createElement(Dropdown.Divider, null));
  });
};

export default (function (_ref2) {
  var dropdownItems = _ref2.dropdownItems,
      icon = _ref2.icon;
  return React.createElement(Dropdown, {
    icon: icon,
    pointing: true,
    className: "link item"
  }, React.createElement(Dropdown.Menu, null, React.createElement(DropdownDrop, {
    items: dropdownItems
  })));
});