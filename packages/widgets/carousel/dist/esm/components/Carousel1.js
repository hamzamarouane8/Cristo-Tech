import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import Slider from "react-slick";
import { Row, Col } from '@ctkit/layout';
import Button from '@ctkit/button';
import Skeleton from '@ctkit/skeleton';
import { styled } from '@ctkit/theme';
import isEmpty from 'lodash.isempty';

var Loader = function Loader() {
  return React.createElement(Skeleton, {
    height: 180
  }, React.createElement("rect", {
    x: "272",
    y: "22",
    rx: "0",
    ry: "0",
    width: "105",
    height: "99",
    radius: 2
  }), React.createElement("rect", {
    x: "103",
    y: "33",
    rx: "0",
    ry: "0",
    width: "1",
    height: "15"
  }), React.createElement("rect", {
    x: "27",
    y: "34",
    rx: "0",
    ry: "0",
    width: "108",
    height: "12"
  }), React.createElement("rect", {
    x: "27",
    y: "60",
    rx: "0",
    ry: "0",
    width: "182",
    height: "3"
  }), React.createElement("rect", {
    x: "27",
    y: "70",
    rx: "0",
    ry: "0",
    width: "132",
    height: "3"
  }), React.createElement("rect", {
    x: "27",
    y: "80",
    rx: "0",
    ry: "0",
    width: "132",
    height: "3"
  }), React.createElement("rect", {
    x: "27",
    y: "100",
    rx: "0",
    ry: "0",
    width: "40",
    height: "12"
  }));
};

export default (function (_ref) {
  var loading = _ref.loading,
      messages = _ref.messages;
  if (!messages || isEmpty(messages)) return null;
  if (loading) return React.createElement(Loader, null);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var activeMessage = messages[activeIndex];
  var _settings = {
    centerMode: true,
    centerPadding: 0,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: function beforeChange(index) {
      return setActiveIndex(index);
    }
  };
  return React.createElement(Row, null, React.createElement(Col, {
    md: 5
  }, React.createElement(MessageTitle, {
    className: "ui-title"
  }, activeMessage.title), React.createElement(MessageContent, {
    className: "ui-description"
  }, activeMessage.description), React.createElement("div", {
    className: "ui-action"
  }, React.createElement(Button, {
    ghost: true
  }, activeMessage.action))), React.createElement(Col, {
    md: 6,
    offset: 1
  }, React.createElement("div", null, React.createElement(Slider, _settings, messages.map(function (item, index) {
    return React.createElement(SliderItem, {
      key: index
    }, React.createElement(SliderItemImg, {
      src: item.img,
      alt: ""
    }));
  })))));
});
var MessageTitle = styled.div.withConfig({
  displayName: "Carousel1__MessageTitle",
  componentId: "sc-1fa4v6o-0"
})(["font-weight:600;line-height:1.2;margin-top:40px;height:130px;overflow:hidden;"]);
var MessageContent = styled.p.withConfig({
  displayName: "Carousel1__MessageContent",
  componentId: "sc-1fa4v6o-1"
})(["height:120px;line-height:1.6;text-align:justify;overflow:hidden;"]);
var SliderItem = styled.div.withConfig({
  displayName: "Carousel1__SliderItem",
  componentId: "sc-1fa4v6o-2"
})(["height:370px;overflow:hidden;padding:5px"]);
var SliderItemImg = styled.img.withConfig({
  displayName: "Carousel1__SliderItemImg",
  componentId: "sc-1fa4v6o-3"
})(["border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,0.08);"]);