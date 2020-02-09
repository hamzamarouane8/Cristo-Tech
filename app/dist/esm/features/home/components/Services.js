import _objectDestructuringEmpty from "@babel/runtime/helpers/objectDestructuringEmpty";
import React from 'react';
import { ServicesStyle } from '../style/services';
var assets = {
  background: require('../../../assets/img/home/shape-2.png')
};
var services = [{
  icon: require('../../../assets/img/home/icons/account.svg'),
  title: 'Business Consulting',
  descr: 'Lorem ipsum dolor sit amet, percipitur sadipscing.'
}, {
  icon: require('../../../assets/img/home/icons/layers.svg'),
  title: 'Interface Design',
  descr: 'Lorem ipsum dolor sit amet, percipitur sadipscing.'
}, {
  icon: require('../../../assets/img/home/icons/bar-chart.svg'),
  title: 'SEO &amp; SMM services',
  descr: 'Lorem ipsum dolor sit amet, percipitur sadipscing.'
}, {
  icon: require('../../../assets/img/home/icons/smartphone.svg'),
  title: 'Apps Development',
  descr: 'Lorem ipsum dolor sit amet, percipitur sadipscing.'
}];
export default (function (_ref) {
  _objectDestructuringEmpty(_ref);

  return React.createElement(ServicesStyle, null, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "col-md-9 col-md-offset-3 main-container"
  }, React.createElement("div", {
    className: "theme-title"
  }, React.createElement("h6", null, "Our Services"), React.createElement("h2", null, "We provide wide range of web & ", React.createElement("br", null), "business services."), React.createElement("p", null, "We\u2019ve strong  work history with different business services"), React.createElement("a", {
    href: "#",
    className: "tran3s"
  }, "See All Services")), React.createElement("div", {
    className: "row services"
  }, (services || []).map(function (service) {
    return React.createElement("div", {
      className: "col-md-6 item-service"
    }, React.createElement("img", {
      src: service.icon,
      alt: "icon"
    }), React.createElement("div", {
      className: "content-service"
    }, React.createElement("h5", null, React.createElement("a", null, service.title)), React.createElement("p", null, service.descr)));
  })))), React.createElement("div", {
    className: "background"
  }, React.createElement("img", {
    src: assets.background,
    alt: "Image"
  })));
});