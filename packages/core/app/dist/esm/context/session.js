import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useReducer, createContext } from 'react';
import { UUID } from '@ctkit/commons';
import * as store from '@ctkit/local-storage';
var initialState = {
  user: null,
  authenticated: false,
  appId: null
};
var Session = createContext(initialState);

var reducer = function reducer(state, action) {
  var sessionId = null;

  var prefix = function prefix(id) {
    return "".concat(state.appId || action.appId, "-").concat(id);
  };

  switch (action.type) {
    case 'LOGOUT':
      store.reset();
      return {
        appId: state.appId,
        user: null,
        authenticated: false
      };

    case 'LOGIN':
      if (!action.payload) throw new Error('INVALID_LOGIN_PAYLOAD');
      sessionId = UUID.create(); //store.set('user.access_token', action.payload.access_token);

      store.set(prefix('session_user'), JSON.stringify(action.payload), sessionId);
      store.set(prefix('session_id'), Buffer.from(sessionId).toString('base64'));
      return _objectSpread({}, state, {
        authenticated: true,
        user: action.payload
      });
  }

  return state;
};

function SessionProvider(_ref) {
  var children = _ref.children,
      appId = _ref.appId;
  var sessionId = store.get("".concat(appId, "-session_id"));
  var user = null;

  if (sessionId) {
    try {
      var secret = Buffer.from(sessionId, 'base64').toString('utf8');
      var userCached = store.get("".concat(appId, "-session_user"), secret);
      user = JSON.parse(userCached);
    } catch (e) {
      console.warn(e.message);
    }
  }

  var _initialState = {
    appId: appId,
    user: user,
    authenticated: user != null
  };

  var _useReducer = useReducer(reducer, _initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var value = {
    state: state,
    dispatch: dispatch
  };
  return React.createElement(Session.Provider, {
    value: value
  }, children);
}

var SessionConsumer = Session.Consumer;
export { Session, SessionProvider, SessionConsumer };