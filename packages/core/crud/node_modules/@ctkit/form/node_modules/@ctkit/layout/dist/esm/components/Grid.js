import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import classNames from 'classnames';
export var Container = function Container(_ref) {
  var children = _ref.children,
      style = _ref.style,
      fluid = _ref.fluid,
      className = _ref.className;
  return React.createElement("div", {
    style: style,
    className: classNames(className, {
      'container-fluid': fluid,
      'container': !fluid
    })
  }, children);
};
export var Row = function Row(_ref2) {
  var style = _ref2.style,
      children = _ref2.children,
      className = _ref2.className;
  return React.createElement("div", {
    style: style,
    className: classNames('row', className)
  }, children);
};
export var Col = function Col(_ref3) {
  var _classNames;

  var style = _ref3.style,
      md = _ref3.md,
      span = _ref3.span,
      offset = _ref3.offset,
      children = _ref3.children,
      className = _ref3.className;

  var _span = span || md;

  if (!_span) {
    _span = 12 - (offset || 0) * 2;
  }

  return React.createElement("div", {
    style: style,
    className: classNames(className, (_classNames = {}, _defineProperty(_classNames, "col-".concat(_span), _span), _defineProperty(_classNames, "offset-".concat(offset), offset), _classNames))
  }, children);
};