import React from 'react';
import { BannerStyle } from '../style/banner';
var assets = {
  background: require('../../../assets/img/services/background.jpeg')
};
export default (function () {
  return React.createElement(BannerStyle, {
    background: assets.background
  }, React.createElement("div", {
    className: "opacity"
  }, React.createElement("h1", null, "Our Services"), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "/home"
  }, "Home")), React.createElement("li", null, "/"), React.createElement("li", null, "Services"))));
});