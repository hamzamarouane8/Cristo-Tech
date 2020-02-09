import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import Spinner from '@ctkit/spinner';
import Router from './Router';
import { Helmet } from "react-helmet";
export default (function (_ref) {
  var id = _ref.id,
      config = _ref.config,
      routes = _ref.routes,
      layout = _ref.layout;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loaded = _React$useState2[0],
      setLoaded = _React$useState2[1];

  React.useEffect(function () {
    setTimeout(function () {
      return setLoaded(true);
    }, 1200);
  }, []);
  if (!loaded) return React.createElement("div", {
    className: "text-center",
    style: {
      padding: 100
    }
  }, React.createElement(Spinner, null));
  return React.createElement(React.Fragment, null, React.createElement(Helmet, null), React.createElement(Router, {
    routes: routes,
    layout: layout,
    config: _objectSpread({}, config, {
      appId: id
    })
  }));
});