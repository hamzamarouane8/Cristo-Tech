import React from 'react';
export default (function (_ref) {
  var p = _ref.p,
      mt = _ref.mt,
      pr = _ref.pr,
      pl = _ref.pl,
      mb = _ref.mb,
      pt = _ref.pt,
      pb = _ref.pb,
      children = _ref.children;
  return React.createElement("div", {
    className: "clearfix",
    style: {
      paddingLeft: pl || p,
      paddingRight: pr || p,
      paddingTop: pt || p,
      paddingBottom: pb || p,
      marginTop: mt,
      marginBottom: mb
    }
  }, children);
});