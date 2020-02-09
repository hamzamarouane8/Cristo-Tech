import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { styled } from '@ctkit/theme';
import Brand from './Brand';
import { NavbarNav } from './Navbar';
export default withRouter(function (_ref) {
  var brand = _ref.brand,
      primaryLinks = _ref.primaryLinks,
      secondaryLinks = _ref.secondaryLinks,
      brandClassName = _ref.brandClassName,
      toggler = _ref.toggler,
      navabarType = _ref.navabarType;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var toggle = function toggle() {
    setIsOpen(!isOpen);
  };

  return React.createElement(React.Fragment, null, React.createElement(Helmet, null, React.createElement("style", {
    type: "text/css"
  }, "\n            body {\n              padding-top: 70px !important;\n            }\n        ")), React.createElement(NavbarPrimary, {
    light: true,
    fixed: "top",
    expand: navabarType ? "lg" : "md"
  }, React.createElement(NavbarBrand, {
    href: "/",
    className: brandClassName
  }, React.createElement(Brand, {
    brand: brand
  })), navabarType && React.createElement(NavbarToggler, {
    children: toggler,
    onClick: function onClick() {
      return toggle();
    }
  }), React.createElement(Collapse, {
    isOpen: isOpen,
    navbar: true
  }, React.createElement(NavbarNav, {
    items: primaryLinks,
    className: "navbar-primary"
  }), React.createElement(NavbarNav, {
    items: secondaryLinks,
    className: "navbar-secondary ml-auto"
  }))));
});
var NavbarPrimary = styled(Navbar).withConfig({
  displayName: "Toolbar__NavbarPrimary",
  componentId: "cz7639-0"
})(["background:#FFF;height:70;padding:.85rem 3rem !important;box-shadow:0 0.2em 0.25em rgba(0,0,0,0.075);"]);