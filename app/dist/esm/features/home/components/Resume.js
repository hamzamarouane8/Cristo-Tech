import _objectDestructuringEmpty from "@babel/runtime/helpers/objectDestructuringEmpty";
import React from 'react';
import { ResumeStyle } from '../style/resume';
import Button from '@ctkit/button';
import { Col, Row } from "reactstrap";
var assets = {
  sign: require('../../../assets/img/home/sign.png'),
  background: require('../../../assets/img/home/background_1.png'),
  arrow: require('../../../assets/img/home/icons/next.svg')
};
export default (function (_ref) {
  _objectDestructuringEmpty(_ref);

  return React.createElement(ResumeStyle, null, React.createElement("div", {
    className: "image-box fadeInLeft"
  }, React.createElement("img", {
    src: assets.background,
    alt: ""
  })), React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement(Col, {
    md: {
      size: 6,
      offset: 6
    },
    className: "main-content"
  }, React.createElement("h2", null, "We\u2019r a dynamic team of creatives people innovation & Marketing Expert."), React.createElement("div", {
    className: "main-wrapper"
  }, React.createElement("h4", null, "Best Digital Agency in Asia"), React.createElement("p", null, "We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & dev, lead generation, and communications requirents. We work with you, not for you. Although we have great resources."), React.createElement("img", {
    src: assets.sign,
    alt: ""
  }), React.createElement("div", {
    className: "button-wrapper"
  }, React.createElement("span", null, "Learn More"), React.createElement("a", null, "more about us ", React.createElement("img", {
    src: assets.arrow,
    alt: ""
  }))))))));
});