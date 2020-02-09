import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectDestructuringEmpty from "@babel/runtime/helpers/objectDestructuringEmpty";
import React, { useState } from 'react';
import { CounterStyle } from '../style/counter';
import CountTo from 'react-count-to';
var listCounter = [{
  countTo: 2730,
  title: "Completed Projects"
}, {
  countTo: 39,
  title: "Availble Country"
}, {
  countTo: 125,
  title: "User Worldwide"
}, {
  countTo: 12,
  title: "Award Winner"
}];
export default (function (_ref) {
  _objectDestructuringEmpty(_ref);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      timer = _useState2[0],
      setTimer = _useState2[1];

  var Counter = function Counter(_ref2) {
    var from = _ref2.from,
        to = _ref2.to;
    setTimer(timer + 1);
  };

  return React.createElement(CounterStyle, null, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "row"
  }, (listCounter || []).map(function (item) {
    return React.createElement("div", {
      className: "col-lg-3"
    }, React.createElement("div", {
      className: "single-box"
    }, React.createElement("h2", null, React.createElement(CountTo, {
      to: item.countTo,
      speed: 1000
    }), "+"), React.createElement("p", null, item.title)));
  }))));
});