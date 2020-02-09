import React from 'react';
import { Tab } from 'semantic-ui-react';
export default (function (_ref) {
  var panes = _ref.panes,
      className = _ref.className;
  return React.createElement("div", {
    className: className
  }, React.createElement(Tab, {
    menu: {
      secondary: true
    },
    panes: panes
  }));
});