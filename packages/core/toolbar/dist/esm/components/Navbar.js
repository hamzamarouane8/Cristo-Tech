import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import isString from 'lodash.isstring';
import isEmpty from 'lodash.isempty';
import map from 'lodash.map';
import get from 'lodash.get';
import { styled } from '@ctkit/theme';
export var NavItemNav = function NavItemNav(_ref) {
  var item = _ref.item;
  return React.createElement(NavItem, null, React.createElement("a", {
    href: "#",
    className: "nav-link ".concat(item.className ? item.className : ''),
    onClick: item.onClick
  }, item.img && React.createElement("img", {
    className: "img",
    src: item.img,
    alt: ""
  }), React.createElement("span", null, item.text)));
};
export var NavItemNavLink = function NavItemNavLink(_ref2) {
  var link = _ref2.link,
      path = _ref2.path;
  return React.createElement(NavItem, null, React.createElement(StyledNavLink, {
    exact: path === '/',
    className: "nav-link ".concat(link.className ? link.className : ''),
    to: path
  }, isString(link) ? link : React.createElement(React.Fragment, null, link.text, "\xA0", link.iconRight)));
};
export var NavbarNav = function NavbarNav(_ref3) {
  var items = _ref3.items,
      className = _ref3.className,
      children = _ref3.children;
  if (isEmpty(items)) return null;
  return React.createElement(Nav, {
    className: "nav-link ".concat(className ? className : ''),
    navbar: true
  }, children, map(items, function (link, path) {
    if (link.img) {
      return React.createElement(NavItemNav, {
        item: link,
        key: path
      });
    }

    return React.createElement(NavItemNavLink, {
      link: link,
      path: path,
      key: path
    });
  }));
};
var StyledNavLink = styled(NavLink).withConfig({
  displayName: "Navbar__StyledNavLink",
  componentId: "sc-1mkcvtd-0"
})(["color:#131313 !important;font-weight:400;font-size:0.95rem;margin:0 10px;transition:all 0.2s linear;"]);