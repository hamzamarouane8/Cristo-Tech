import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import Toolbar from '@ctkit/toolbar';
import Sidebar from './_sidebar';
import { LayoutGuestStyle } from './styles/layoutSecured';
var assets = {
  logout: require('../../assets/img/ic_logout.svg'),
  logo: require('../../assets/img/Taux de change_icon.svg'),
  menu: require('../../assets/img/menu.svg')
};
export default (function (_ref) {
  var session = _ref.session,
      children = _ref.children;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      sidebar = _useState2[0],
      setSidebar = _useState2[1];

  var primaryLinks = {
    '/#': {
      img: assets.menu,
      text: '',
      onClick: function onClick() {
        setSidebar(!sidebar);
      }
    }
  };
  var secondaryLinks = {
    '/': {
      img: assets.logout,
      text: '',
      onClick: session.logout,
      className: 'sg-logout'
    }
  };
  return React.createElement(LayoutGuestStyle, null, React.createElement(Toolbar, {
    navabarType: false,
    toggler: React.createElement("img", {
      src: assets.menu,
      alt: ""
    }),
    brand: {
      image: assets.logo,
      name: 'BankUP'
    },
    fluid: true //primaryLinks={primaryLinks}
    ,
    secondaryLinks: secondaryLinks
  }), React.createElement(React.Fragment, null, React.createElement("div", {
    className: "layout-main"
  }, children), React.createElement("div", {
    className: sidebar ? 'd-block' : 'd-none'
  }, React.createElement(Sidebar, null))));
});