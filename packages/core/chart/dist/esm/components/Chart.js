import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Pane from '@ctkit/pane';
import ValueChart from './ValueChart';
import LineChart from './LineChart';
export default (function (_ref) {
  var type = _ref.type,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ["type", "height"]);

  var content = null;

  if (type === 'line') {
    content = React.createElement(LineChart, props);
  } else {
    content = React.createElement(ValueChart, props);
  }

  return React.createElement(Pane, null, React.createElement("div", {
    className: "clearfix",
    style: {
      height: height || 150
    }
  }, content));
});