import _objectDestructuringEmpty from "@babel/runtime/helpers/objectDestructuringEmpty";
import React from 'react';
import { HeaderStyle, ContainerWhatWeDo } from '../style/secondHeader';
var list = [{
  icon: require('../../../assets/img/home/icons/notepad.svg'),
  title: "Financial Advise",
  descr: "Market Statics Growth & Advance Analysis"
}, {
  icon: require('../../../assets/img/home/icons/bar-chart.svg'),
  title: "Financial Advise",
  descr: "Market Statics Growth & Advance Analysis"
}, {
  icon: require('../../../assets/img/home/icons/diamond.svg'),
  title: "Financial Advise",
  descr: "Market Statics Growth & Advance Analysis"
}];
export default (function (_ref) {
  _objectDestructuringEmpty(_ref);

  return React.createElement(ContainerWhatWeDo, {
    className: "container-what-we-do"
  }, React.createElement("h3", null, "The thing that motivates me is a very common form of motivation. And that is, with other folk counting on me, it's so easy to be motivated."), React.createElement("h6", null, "we work with business & provide solution to client with their business problem"), React.createElement("div", {
    className: "row"
  }, (list || []).map(function (header) {
    return React.createElement(HeaderItem, {
      content: header
    });
  })));
});

var HeaderItem = function HeaderItem(_ref2) {
  var content = _ref2.content;
  return React.createElement(HeaderStyle, {
    color: content.color,
    className: "col-md-4"
  }, React.createElement("div", {
    className: "single-block"
  }, React.createElement("div", {
    className: "block-icon"
  }, React.createElement("img", {
    src: content.icon,
    alt: ""
  })), React.createElement("h6", null, content.title), React.createElement("h5", null, React.createElement("a", null, content.descr))));
};