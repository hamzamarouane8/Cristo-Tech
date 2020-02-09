import React from 'react';
import { Menu, Position } from '@blueprintjs/core';
import styled from 'styled-components';
import Popover from './Popover';
export default (function (_ref) {
  var items = _ref.items,
      target = _ref.target,
      children = _ref.children;
  return React.createElement(Popover, {
    position: Position.BOTTOM,
    target: target || children,
    content: React.createElement(StyledMenu, null, items.map(function (item, index) {
      if (item === '-') return React.createElement(Menu.Divider, {
        key: index
      });
      return React.createElement(Menu.Item, {
        text: item.text,
        key: index,
        onClick: item.onClick,
        labelElement: item.endIcon,
        icon: item.icon
      });
    }))
  });
});
var StyledMenu = styled(Menu).withConfig({
  displayName: "Menu__StyledMenu",
  componentId: "u6sjxv-0"
})(["li{margin:0;}"]);