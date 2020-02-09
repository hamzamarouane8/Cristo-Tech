import React from 'react';
import Promise from 'bluebird';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import map from 'lodash.map';
import forEach from 'lodash.foreach';
import get from 'lodash.get';
import isString from 'lodash.isstring';
import isObject from 'lodash.isobject';
import isFunction from 'lodash.isfunction';
import Lazy from '@ctkit/lazy-component';
import AlertsProvider from '@ctkit/alerts'; // -----------------------------------------------------------------------------

import { loginAction, logoutAction, LOGIN_URI, LOGOUT_URI, HOME_URI } from '../constants';
import { Session, SessionProvider } from '../context/session'; // -----------------------------------------------------------------------------

var ExtRoute = function ExtRoute(_ref) {
  var config = _ref.config,
      component = _ref.component,
      access = _ref.access,
      path = _ref.path,
      exact = _ref.exact,
      Layout = _ref.Layout;
  //console.log('access',access['guest'])
  var session = null;

  if (config.session) {
    var _React$useContext = React.useContext(Session),
        state = _React$useContext.state,
        dispatch = _React$useContext.dispatch;

    var loginPageUri = get(config, 'loginPage', LOGIN_URI);
    var homePage = get(config, 'homePage', HOME_URI);

    if (access) {
      if (state.authenticated && access['guest']) {
        return React.createElement(Redirect, {
          to: homePage
        });
      } else if (!state.authenticated && !access['guest']) {
        return React.createElement(Redirect, {
          to: loginPageUri
        });
      }
    }

    session = {
      user: state.user,
      login: function login(user) {
        dispatch(loginAction(user));
        return Promise.resolve(user);
      },
      logout: function logout() {
        dispatch(logoutAction());
        return Promise.resolve();
      }
    };
  }

  return React.createElement(Route, {
    path: path,
    exact: exact,
    render: function render(props) {
      if (isString(component)) return React.createElement(Redirect, {
        to: component
      });

      var redirect = function redirect(path) {
        props.history.push(path);
      };

      var NestedComponent = component;
      var pageProps = {
        router: {
          redirect: redirect
        },
        session: session
      };
      var view = React.createElement(Lazy, null, React.createElement(NestedComponent, pageProps)); // if (path === policy.loginPage) return view;

      return React.createElement(Layout, pageProps, view);
    }
  });
};

var DefaultLogout = function DefaultLogout(_ref2) {
  var history = _ref2.history;

  var _React$useContext2 = React.useContext(Session),
      dispatch = _React$useContext2.dispatch;

  dispatch(logoutAction());
  history.replace('/');
  return null;
};

var NoLayout = function NoLayout(_ref3) {
  var children = _ref3.children;
  return children;
};

var Page404 = function Page404() {
  return React.createElement("h1", null, "Page not found");
};

export default (function (_ref4) {
  var routes = _ref4.routes,
      layout = _ref4.layout,
      config = _ref4.config;
  var _routes = {};
  var layouts = {};
  var access = {};
  forEach(routes, function (c, path) {
    if (isString(c)) {
      _routes[path] = c;
    } else if (isFunction(c)) {
      _routes[path] = React.lazy(c);
    } else if (isObject(c)) {
      layouts[path] = c.layout;
      access[path] = {
        guest: c.guest,
        access: c.access
      };
      _routes[path] = React.lazy(c.component);
    } else {
      console.error(c);
      throw new Error('INVALID_ROUTE');
    }

    if (layouts[path] === false) {
      layouts[path] = NoLayout;
    } else {
      layouts[path] = c.layout || NoLayout;
    }
  });
  return React.createElement(SessionProvider, {
    appId: config.appId
  }, React.createElement(AlertsProvider, null, React.createElement(BrowserRouter, null, React.createElement(Switch, null, map(_routes, function (page, path) {
    return React.createElement(ExtRoute, {
      exact: true,
      component: page,
      path: path,
      key: path,
      access: access[path],
      config: config,
      Layout: layouts[path]
    });
  }), config.session && React.createElement(Route, {
    exact: true,
    path: LOGOUT_URI,
    component: DefaultLogout
  }), React.createElement(Route, {
    component: Page404
  })))));
});