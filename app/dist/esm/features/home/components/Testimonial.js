import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import { TestimonialStyle } from '../style/testimonial';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from "reactstrap";
var assets = {
  background: require('../../../assets/img/home/slider_2.png'),
  quote: require('../../../assets/img/home/icons/quote-left.svg')
};
var listTestimonials = [{
  img: require('../../../assets/img/home/profile4.jpg'),
  author: 'Zubayer Hasan',
  text: 'Their testimonial videos aren\'t production quality, but they get the message across, cover useful & relevant information which goes to show you don\'t need to invest thousands in production get some testimonial videos up with quality.'
}, {
  img: require('../../../assets/img/home/profile4.jpg'),
  author: 'jhon smith',
  text: 'Their testimonial videos aren\'t production quality, but they get the message across, cover useful & relevant information which goes to show you don\'t need to invest thousands in production get some testimonial videos up with quality.'
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
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }, settings);

  return React.createElement(TestimonialStyle, null, React.createElement("div", {
    className: "image-box fadeInLeft"
  }, React.createElement("img", {
    src: assets.background,
    alt: ""
  })), React.createElement("div", {
    className: "container"
  }, React.createElement(Col, {
    md: {
      size: 6,
      offset: 6
    },
    className: "testimonial-main"
  }, React.createElement("div", {
    className: "theme-title"
  }, React.createElement("h6", null, "Testimonials"), React.createElement("h2", null, "Check what\u2019s our client ", React.createElement("br", null), "Say about us")), React.createElement(Row, null, React.createElement(Col, {
    md: "12"
  }, React.createElement(Slider, _settings, (listTestimonials || []).map(function (testimonial, index) {
    return React.createElement(SliderItem, {
      key: index,
      item: testimonial
    });
  })))))));
});

var SliderItem = function SliderItem(_ref2) {
  var item = _ref2.item;
  return React.createElement("div", {
    className: "item-testimonial"
  }, React.createElement("img", {
    src: assets.quote,
    alt: "quote",
    className: "quote-icon"
  }), React.createElement("div", {
    className: "wrapper"
  }, React.createElement("p", null, item.text), React.createElement("div", {
    className: "name clearfix"
  }, React.createElement("img", {
    src: item.img,
    alt: ""
  }), React.createElement("h5", null, item.author), React.createElement("span", null))));
};