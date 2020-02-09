import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState } from 'react';
import Slider from "react-slick";
import { Row, Col } from '@ctkit/layout';
import Skeleton from '@ctkit/skeleton';
import isEmpty from 'lodash.isempty';
import { styled } from "@ctkit/theme";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

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
  var items = _ref.items,
      children = _ref.children,
      activeId = _ref.activeId,
      handleSelectMarker = _ref.handleSelectMarker,
      slideToIndex = _ref.slideToIndex,
      loading = _ref.loading,
      settings = _objectWithoutProperties(_ref, ["items", "children", "activeId", "handleSelectMarker", "slideToIndex", "loading"]);

  if (!items || isEmpty(items)) return null;
  if (loading) return React.createElement(Loader, null);

  var _settings = _objectSpread({
    centerMode: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    //nextArrow: <div className="img" style={{width:'30px'}}><img src={assets.arrowLeft} alt="" /></div>,
    //prevArrow: <div className="img"><img src={assets.arrowRight} alt="" /></div>,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 2,
        nextArrow: null,
        prevArrow: null
      }
    }, {
      breakpoint: 425,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        nextArrow: null,
        prevArrow: null
      }
    }]
  }, settings.settings);

  var handleMarkerDetails = function handleMarkerDetails(item) {
    handleSelectMarker(item);
  };

  return React.createElement(Row, null, React.createElement(Col, null, React.createElement("div", {
    className: "carousel-content"
  }, React.createElement(Slider, _settings, (items || []).map(function (item, index) {
    return React.createElement(SliderItem, {
      key: index,
      item: item,
      onClick: function onClick() {
        return handleMarkerDetails(item);
      }
    });
  })))));
});

var SliderItem = function SliderItem(_ref2) {
  var className = _ref2.className,
      onClick = _ref2.onClick,
      item = _ref2.item,
      title = _ref2.title,
      descr = _ref2.descr;
  return React.createElement(React.Fragment, null, React.createElement(React.Fragment, null, React.createElement(SliderItemContent, null, React.createElement(CardActionArea, {
    onClick: onClick
  }, React.createElement(CardContent, null, React.createElement(SliderItemIcon, null), React.createElement("div", {
    className: "card-content"
  }, React.createElement(SliderItemTitle, null, item.title)))))));
};

var SliderItemContent = styled(Card).withConfig({
  displayName: "Carousel2__SliderItemContent",
  componentId: "sc-5d1jk1-0"
})(["width:94%;border-radius:5px!important;box-shadow:0 10px 30px 0 rgba(153,165,185,0.2)!important;background-color:#ffffff;"]);
var SliderItemDescr = styled.div.withConfig({
  displayName: "Carousel2__SliderItemDescr",
  componentId: "sc-5d1jk1-1"
})(["width:80%;opacity:0.7;font-size:13px;margin-left:50px;line-height:1.5;text-align:left;color:#010035;"]);
var SliderItemTitle = styled.div.withConfig({
  displayName: "Carousel2__SliderItemTitle",
  componentId: "sc-5d1jk1-2"
})(["font-size:18px;font-weight:700;line-height:1.14;margin-left:50px;letter-spacing:0.1px;text-align:left;color:#010035;"]);
var SliderItemIcon = styled.div.withConfig({
  displayName: "Carousel2__SliderItemIcon",
  componentId: "sc-5d1jk1-3"
})(["width:40px;position:absolute;top:25%;"]);