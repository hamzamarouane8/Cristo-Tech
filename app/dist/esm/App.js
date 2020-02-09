import React from 'react';
import AppContainer from '@ctkit/app';
import './assets/styles/app.scss';
import LayoutGuest from './pages/layout/_layoutGuest';
import LayoutSecured from './pages/layout/_layoutSecured';
/**
 * Routes du projet
 */

var routes = {
  '/': '/home',
  '/home': {
    component: function component() {
      return import('./pages/home');
    },
    layout: LayoutGuest,
    guest: true
  },
  '/services': {
    component: function component() {
      return import('./pages/service');
    },
    layout: LayoutGuest,
    guest: true
  }
};
export default (function () {
  return React.createElement(AppContainer, {
    id: "bankup",
    routes: routes,
    layout: LayoutGuest,
    config: {
      session: true
    }
  });
});