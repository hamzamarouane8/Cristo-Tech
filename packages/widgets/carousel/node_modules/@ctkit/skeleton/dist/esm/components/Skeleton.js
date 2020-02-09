import React from 'react';
import ContentLoader from "react-content-loader";
export default (function (_ref) {
  var height = _ref.height,
      children = _ref.children;
  return React.createElement(ContentLoader, {
    height: height,
    speed: 2,
    primaryColor: "#f3f3f3",
    secondaryColor: "#ecebeb"
  }, children);
});