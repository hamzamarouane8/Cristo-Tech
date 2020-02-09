import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import NavbarDesign from '../styles';
import isEmpty from 'lodash/isEmpty';

var NavbarNav = function NavbarNav(_ref) {
  var items = _ref.items,
      className = _ref.className;
  if (isEmpty(items)) return null;
  return React.createElement(Nav, {
    className: className,
    navbar: true
  }, items.map(function (item, id) {
    return React.createElement(NavItem, {
      key: id
    }, React.createElement(NavLink, {
      href: item.href,
      className: item.className,
      onClick: item.onClick
    }, item.img && React.createElement("img", {
      src: item.img,
      alt: ""
    }), item.text));
  }));
};

export default (function (_ref2) {
  var navItemsStart = _ref2.navItemsStart,
      navItemsEnd = _ref2.navItemsEnd,
      logo = _ref2.logo;
  return React.createElement(NavbarDesign, null, React.createElement(Navbar, {
    light: true,
    expand: "md"
  }, React.createElement(NavbarBrand, {
    href: "/"
  }, React.createElement("img", {
    alt: "",
    src: logo
  })), React.createElement(NavbarToggler, null), React.createElement(Collapse, {
    navbar: true
  }, React.createElement(NavbarNav, {
    className: "navbar-start",
    items: navItemsStart
  }), React.createElement(NavbarNav, {
    className: "ml-auto",
    items: navItemsEnd
  }))));
});