import React from 'react';
import Toolbar from '@ctkit/toolbar';
import { LayoutGuestStyle } from './styles/layoutGuest';
import { FiLogIn } from 'react-icons/fi';
var assets = {
  logo: require('../../assets/img/logo/logo.png'),
  logout: require('../../assets/img/ic_logout.svg'),
  notifications: require('../../assets/img/ic_notification.svg'),
  menu: require('../../assets/img/menu.svg'),
  login: require('../../assets/img/ic_login.svg')
};
var secondaryLinks = {
  '/home': {
    text: 'Home'
  },
  '/services': {
    text: 'Services'
  },
  '/faq': {
    text: 'Portfolio'
  },
  '/contactUs': {
    text: 'Contact Us'
  }
};
export default (function (_ref) {
  var children = _ref.children;
  return React.createElement(LayoutGuestStyle, null, React.createElement(Toolbar, {
    navabarType: true,
    toggler: React.createElement("img", {
      src: assets.menu,
      alt: ""
    }),
    brand: {
      image: assets.logo,
      name: ''
    },
    fluid: true //primaryLinks={primaryLinks}
    ,
    secondaryLinks: secondaryLinks
  }), children, React.createElement("div", {
    className: "footer"
  }, "Copyright \xA9 2020 Crysto Tech | Web Development + SEO + Logo Design | Call us Today +212 641-844-635"));
});