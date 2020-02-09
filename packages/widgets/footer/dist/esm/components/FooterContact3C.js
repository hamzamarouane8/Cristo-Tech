import React from 'react';
import { Col, Row } from '@ctkit/layout';
export default (function (_ref) {
  var contacts = _ref.contacts;
  if (!contacts) return null;
  return React.createElement(Row, null, contacts.map(function (item, index) {
    return React.createElement(Col, {
      md: 4,
      key: index
    }, React.createElement("div", null, React.createElement("img", {
      src: item.icon,
      alt: ""
    }), React.createElement("span", {
      className: "contact-text"
    }, item.text)));
  }));
});