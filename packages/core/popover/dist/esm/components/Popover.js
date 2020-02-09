import React from 'react';
import { Popover } from '@blueprintjs/core';
export default (function (_ref) {
  var content = _ref.content,
      target = _ref.target,
      position = _ref.position,
      children = _ref.children;
  return React.createElement(Popover, {
    content: content,
    target: target || children,
    position: position
  });
});