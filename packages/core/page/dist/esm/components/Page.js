import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Col, Container, Row } from '@ctkit/layout';

var Page = function Page(_ref) {
  var title = _ref.title,
      theme = _ref.theme,
      children = _ref.children,
      backgroundImage = _ref.backgroundImage,
      grid = _ref.grid;

  if (backgroundImage) {
    children = React.createElement(CoverStyle, {
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")")
      }
    }, React.createElement("div", {
      className: "overlay"
    }, children));
  }

  var __children = children;

  if (grid === true) {
    __children = React.createElement(Container, null, __children);
  } else if (grid) {
    __children = React.createElement(Container, {
      fluid: grid.fluid
    }, React.createElement(Row, null, React.createElement(Col, {
      offset: grid.offset,
      span: grid.span
    }, __children)));
  }

  return React.createElement(React.Fragment, null, React.createElement(Helmet, null, React.createElement("meta", {
    charSet: "utf-8"
  }), title && React.createElement("title", null, title), React.createElement("html", {
    lang: "fr",
    className: theme
  }), React.createElement("body", {
    key: "main",
    className: theme
  })), __children);
};

var CoverStyle = styled.div.withConfig({
  displayName: "Page__CoverStyle",
  componentId: "sc-1me4gyw-0"
})(["display:block;width:100%;height:100%;background-position:center;background-repeat:no-repeat;background-size:cover;& > .overlay{background:rgba(0,0,0,0.2);display:block;width:100%;height:100%;}"]);

Page.Body = function (_ref2) {
  var children = _ref2.children;
  return React.createElement(StyledBody, {
    className: "ui page-body"
  }, children);
};

var StyledBody = styled('div').withConfig({
  displayName: "Page__StyledBody",
  componentId: "sc-1me4gyw-1"
})(["a{color:#1D84B5;&:hover{color:#176087;}}"]);
export default Page;