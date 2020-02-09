import React from 'react';
import AppContainer from '@ctkit/app';
import './assets/styles/app.scss';
import LayoutGuest from './pages/layout/_layoutGuest'
import LayoutSecured from './pages/layout/_layoutSecured'

/**
 * Routes du projet
 */
const routes = {
  '/': '/home',
  '/home': {
    component: () => import('./pages/home'),
    layout: LayoutGuest,
    guest: true
  },
  '/services': {
    component: () => import('./pages/service'),
    layout: LayoutGuest,
    guest: true
  }
};



export default () => (
  <AppContainer id="bankup" routes={routes} layout={LayoutGuest} config={{session: true}}/>
)
