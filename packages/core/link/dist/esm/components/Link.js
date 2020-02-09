import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
export default (function (_ref) {
  var to = _ref.to,
      onClick = _ref.onClick,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["to", "onClick", "children"]);

  if (onClick || !to) return React.createElement("a", _extends({
    href: "javascript:void(0)",
    onClick: onClick
  }, props), children);
  throw new Error('TODO');
});