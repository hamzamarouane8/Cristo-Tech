import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import { PricingStyle, CardStyle } from '../style/pricing.js';
import { Col, Row, Container } from "reactstrap";
import { Button } from 'semantic-ui-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default (function () {
  var _settings = {
    centerMode: true,
    centerPadding: 0,
    arrows: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  var handleAClick = function handleAClick(_ref) {
    var name = _ref.name;
    setActive(name === 'monthly' ? true : false);
  };

  var listPackages = [{
    color: "#d3c4bd",
    title: "Pack Silver",
    price: 5000,
    text: "lorem text example lorem",
    discount: "40% OFF",
    desciption: [{
      text: "24 hour support"
    }, {
      text: "Business & financ Analysing"
    }, {
      text: "Customer Management"
    }, {
      text: "Graphic Design"
    }]
  }, {
    color: "#ff6f61",
    title: "Pack Golden",
    price: 7000,
    text: "lorem text example lorem",
    discount: "40% OFF",
    desciption: [{
      text: "24 hour support"
    }, {
      text: "Business & financ Analysing"
    }, {
      text: "Customer Management"
    }, {
      text: "Graphic Design"
    }]
  }, {
    color: "#d3c4bd",
    title: "Pack Golden",
    price: 7000,
    text: "lorem text example lorem",
    discount: "40% OFF",
    desciption: [{
      text: "24 hour support"
    }, {
      text: "Business & financ Analysing"
    }, {
      text: "Customer Management"
    }, {
      text: "Graphic Design"
    }]
  }];
  return React.createElement(PricingStyle, null, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-12"
  }, React.createElement("div", {
    className: "theme-title"
  }, React.createElement("h6", null, "Our pricing"), React.createElement("h2", null, "Not any hidden charge, Choose you pricing plan"), React.createElement("p", null, "We have differe type of pricing table to choose with your need with resonable price. ")))), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-12 d-none d-lg-block"
  }, React.createElement("div", {
    className: "packages"
  }, (listPackages || []).map(function (card) {
    return React.createElement(PackageItem, {
      card: card
    });
  }))), React.createElement("div", {
    className: "d-sm-none col-sm-12"
  }, React.createElement(Slider, _settings, (listPackages || []).map(function (card, index) {
    return React.createElement(PackageItem, {
      key: index,
      card: card
    });
  }))))));
});

var PackageItem = function PackageItem(_ref2) {
  var card = _ref2.card;
  return React.createElement(CardStyle, {
    color: card.color
  }, React.createElement("div", {
    class: "card"
  }, React.createElement("div", {
    class: "card__side card__side--front card__side--front-1"
  }, React.createElement("div", {
    class: "card__description price"
  }, React.createElement("h3", null, card.title), React.createElement("span", null, card.price, React.createElement("sup", null, "MAD")), React.createElement("h6", null, "Business"))), React.createElement("div", {
    class: "card__side card__side--back card__side--back-1"
  }, React.createElement("div", {
    class: "card__description info"
  }, React.createElement("h6", null, card.discount), React.createElement("h4", null, card.title), React.createElement("ul", null, card.desciption && (card.desciption || []).map(function (item) {
    return React.createElement("li", null, item.text);
  }))))));
};