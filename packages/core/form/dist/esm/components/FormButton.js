import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Button from '@ctkit/button';
import { FormConsumer } from '../support/context';
export default (function (_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["children", "onClick"]);

  return React.createElement(FormConsumer, null, function (_ref2) {
    var size = _ref2.size;
    return React.createElement(Button, _extends({
      type: "button",
      onClick: onClick,
      size: size
    }, props), children);
  });
});