import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { createContext, useContext, useState, useEffect } from 'react';
var WindowDimensionsCtx = createContext(null);

var WindowDimensionsProvider = function WindowDimensionsProvider(_ref) {
  var children = _ref.children;

  var _useState = useState({
    width: window.innerWidth,
    height: window.innerHeight
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  useEffect(function () {
    var handleResize = function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return React.createElement(WindowDimensionsCtx.Provider, {
    value: dimensions
  }, children);
};

export default WindowDimensionsProvider;
export var useWindowDimensions = function useWindowDimensions() {
  return useContext(WindowDimensionsCtx);
};