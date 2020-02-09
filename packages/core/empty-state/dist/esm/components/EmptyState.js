import React from 'react';
import styled from 'styled-components';
import Button from '@ctkit/button';
import isEmpty from 'lodash.isempty';
import isString from 'lodash.isstring';
import classnames from 'classnames';
export default (function (_ref) {
  var data = _ref.data,
      action = _ref.action,
      onClick = _ref.onClick,
      children = _ref.children,
      header = _ref.header,
      description = _ref.description,
      image = _ref.image,
      background = _ref.background;
  if (children && !isEmpty(data)) return children;
  return React.createElement(Root, {
    className: classnames('clearfix', background)
  }, React.createElement("div", {
    className: "rui-content"
  }, isString(image) ? React.createElement("img", {
    src: image,
    alt: "",
    width: 100
  }) : image, header && React.createElement("h4", null, header), React.createElement("p", null, description), action && React.createElement("div", {
    className: "mt-4 clearfix rui-actions"
  }, React.createElement(Button, {
    size: "large",
    primary: true,
    onClick: onClick
  }, action))));
});
var Root = styled.div.withConfig({
  displayName: "EmptyState__Root",
  componentId: "sc-1wfe459-0"
})(["background:#FFF;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.08);display:block;&.dark{background:#F6F7F8;}padding:60px;margin-top:40px;& > .rui-content{margin:auto;max-width:400px;line-height:1.6;text-align:center;h4{margin-top:20px;font-weight:bold;font-size:1.6em;color:rgb(23,43,77);}p{margin-top:20px;font-weight:400;font-size:1.2em;}}"]);