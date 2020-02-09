import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState } from "react";
import Slider from "react-slick";
import { CarouselStyle } from '../styles/carousel';
import { Col, Row } from "reactstrap";
import { CardStyle } from '../styles/card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Loader } from '../../../components/Loader';
export default (function (_ref) {
  var list = _ref.list,
      activeId = _ref.activeId,
      selectedAccount = _ref.selectedAccount,
      loading = _ref.loading,
      settings = _objectWithoutProperties(_ref, ["list", "activeId", "selectedAccount", "loading"]);

  if (loading) return React.createElement(Loader, null);

  var _useState = useState(list[0]),
      _useState2 = _slicedToArray(_useState, 2),
      activeItem = _useState2[0],
      setActiveItem = _useState2[1];

  var _settings = _objectSpread({
    centerMode: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 425,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1
      }
    }]
  }, settings);

  return React.createElement(CarouselStyle, null, React.createElement(Row, null, React.createElement(Col, null, React.createElement("div", {
    className: "widget-title"
  }, "Mes Comptes"), React.createElement("div", {
    className: "carousel-content"
  }, React.createElement(Slider, _settings, list.map(function (item, index) {
    return React.createElement(SliderItem, {
      key: index,
      item: item,
      active: activeItem,
      onClick: function onClick() {
        setActiveItem(item);
        selectedAccount(item);
      }
    });
  }))))));
});

var SliderItem = function SliderItem(_ref2) {
  var className = _ref2.className,
      onClick = _ref2.onClick,
      item = _ref2.item,
      children = _ref2.children,
      active = _ref2.active;
  return React.createElement(CardStyle, {
    active: active.id === item.id ? true : false
  }, React.createElement("div", {
    className: 'account-ui ' + className,
    onClick: onClick
  }, React.createElement(Row, null, React.createElement(Col, {
    md: 10
  }, React.createElement("div", {
    className: "card-title"
  }, "Compte Ch\xE8que"), React.createElement("div", {
    className: "card-title sub"
  }, item.accountNumber)), React.createElement(Col, {
    md: 2
  }, children)), React.createElement(Row, {
    className: "description"
  }, React.createElement(Col, {
    md: 6
  }, React.createElement("div", {
    className: "card-balance"
  }, item.realTimeBalance, " ", item.currency)), React.createElement(Col, {
    md: 6
  }, React.createElement("div", {
    className: "card-income"
  }, "A venir : ", item.upcomingBalance, " ", item.currency)))));
};