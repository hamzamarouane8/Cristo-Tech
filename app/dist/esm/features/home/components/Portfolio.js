import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import { PortfolioStyle } from '../style/portfolio';
import { CardStyle } from "../../accounts/styles/card";
import { Col, Row } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var listPortfolio = [{
  img: require('../../../assets/img/home/Capture.PNG')
}, {
  img: require('../../../assets/img/home/Capture.PNG')
}, {
  img: require('../../../assets/img/home/Capture.PNG')
}, {
  img: require('../../../assets/img/home/Capture.PNG')
}, {
  img: require('../../../assets/img/home/Capture.PNG')
}, {
  img: require('../../../assets/img/home/Capture.PNG')
}, {
  img: require('../../../assets/img/home/Capture.PNG')
}, {
  img: require('../../../assets/img/home/Capture.PNG')
}];
export default (function (_ref) {
  var settings = _ref.settings;

  var _settings = _objectSpread({
    centerMode: true,
    centerPadding: 0,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }, settings);

  return React.createElement(PortfolioStyle, null, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "theme-title"
  }, React.createElement("h6", null, "Recent work"), React.createElement("h2", null, "We\u2019ve done lot\u2019s of work, Let\u2019s ", React.createElement("br", null), "Check some from here"), React.createElement("a", {
    href: "#"
  }, "See All projects"))), React.createElement("div", {
    className: "wrapper"
  }, React.createElement(Row, null, React.createElement(Col, {
    md: "12"
  }, React.createElement(Slider, _settings, (listPortfolio || []).map(function (item, index) {
    return React.createElement(SliderItem, {
      key: index,
      item: item
    });
  }))))));
});

var SliderItem = function SliderItem(_ref2) {
  var item = _ref2.item;
  return React.createElement("div", {
    className: "item-portfolio"
  }, React.createElement("img", {
    src: item.img,
    alt: ""
  }));
};