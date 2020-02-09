import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import { SidebarStyle } from './styles/sidebar';
import IcAccounts from "../../components/images/IcAccounts";
import IcFaq from "../../components/images/IcFaq";
import IcWallets from "../../components/images/IcWallets";
import isString from "lodash.isstring";
import classnames from 'classnames';
export default (function () {
  var navItems = [{
    text: 'Mes Comptes',
    path: '/dashboard',
    icon: IcAccounts,
    className: 'account'
  }, {
    text: 'Wallets',
    path: '/wallets',
    icon: IcWallets,
    className: 'wallets'
  }, {
    text: 'FAQ',
    path: '/faqSec',
    icon: IcFaq,
    className: 'faq'
  }];
  return React.createElement(SidebarStyle, null, React.createElement("div", {
    className: "layout-sidebar"
  }, React.createElement(Nav, {
    vertical: true
  }, navItems.map(function (item, index) {
    return React.createElement(NavItem, {
      key: index
    }, React.createElement(NavLink, {
      to: item.path,
      exact: true,
      id: classnames('clearfix', item.className)
    }, React.createElement("div", {
      className: "img"
    }, isString(item.icon) ? React.createElement("img", {
      alt: "",
      src: item.icon
    }) : React.createElement(item.icon, null), React.createElement("span", null, item.text))));
  }))));
});