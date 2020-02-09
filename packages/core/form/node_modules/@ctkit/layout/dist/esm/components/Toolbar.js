import React from 'react';
import { Row, Col } from './Grid';
import { Heading } from '@ctkit/text';
export default (function (_ref) {
  var children = _ref.children,
      title = _ref.title,
      description = _ref.description;
  return React.createElement(Row, null, React.createElement(Col, {
    md: 8
  }, React.createElement(Heading, {
    xlarge: true,
    text: title,
    caption: description
  })), React.createElement(Col, {
    md: 4,
    className: "text-right"
  }, children));
});