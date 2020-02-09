import _objectDestructuringEmpty from "@babel/runtime/helpers/objectDestructuringEmpty";
import React from 'react';
import { SliderStyle } from '../style/silder';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from "reactstrap";
import Button from '@ctkit/button';
var assets = {
  background: require('../../../assets/img/home/slide-1.jpg'),
  slider1: require('../../../assets/img/home/slider_3.png'),
  slider_1: require('../../../assets/img/home/1.jpg')
};
var listItems = [{
  img: require('../../../assets/img/home/slider_3.png')
}, {
  img: require('../../../assets/img/home/slider_4.png')
}];
export default (function (_ref) {
  _objectDestructuringEmpty(_ref);

  var _settings = {
    centerMode: true,
    centerPadding: 0,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return React.createElement("div", null, React.createElement("div", {
    className: "wrapper"
  }, React.createElement(Row, null, React.createElement(Col, {
    md: "12"
  }, React.createElement(Slider, _settings, (listItems || []).map(function (item, index) {
    return React.createElement(SliderItem, {
      key: index,
      item: item
    });
  }))))));
});

var SliderItem = function SliderItem(_ref2) {
  var item = _ref2.item;
  return React.createElement(SliderStyle, {
    src: assets.background
  }, React.createElement("div", {
    className: "banner-one"
  }, React.createElement("div", {
    className: "camera_caption"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("h5", {
    className: "fadeInDown"
  }, "We're Awsome"), React.createElement("h1", {
    className: "fadeInDown"
  }, React.createElement("span", null, "Digital Agency"), React.createElement("br", null), React.createElement("span", null, "That Help You to"), React.createElement("br", null), React.createElement("span", null, "Go Ahead")), React.createElement("div", {
    className: "action-wrapper"
  }, React.createElement(Button, null, "explore")), React.createElement("div", {
    className: "wow fadeInRight animated image-shape-one",
    "data-wow-delay": "0.33s"
  }, item.img && React.createElement("img", {
    src: item.img,
    alt: "slider"
  }))))));
};