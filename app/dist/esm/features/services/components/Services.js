import React from 'react';
import { ServiceStyle } from '../style/services';
var listServices = [{
  title: "Service Offering",
  descr: "Professional IT services by our expert",
  img: require('../../../assets/img/services/icon/diamond.svg')
}, {
  title: "Business Services",
  descr: "Complete Business solution global organisations",
  img: require('../../../assets/img/services/icon/pie-chart.svg')
}, {
  title: "Technical Service",
  descr: "Managed company services and solutions",
  img: require('../../../assets/img/services/icon/notepad.svg')
}, {
  title: "Contan Creation",
  descr: "We have expert to create online cantant",
  img: require('../../../assets/img/services/icon/draw.svg')
}, {
  title: "Design & Devlopment",
  descr: "Provide all kind of design & development Services",
  img: require('../../../assets/img/services/icon/graphic.svg')
}, {
  title: "SEO & SMM",
  descr: "Boost your website traffice by using our tools",
  img: require('../../../assets/img/services/icon/data.svg')
}];
export default (function () {
  return React.createElement(ServiceStyle, null, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("h2", null, "We provide wide range of business services.")), React.createElement("div", {
    className: "row"
  }, (listServices || []).map(function (service) {
    return React.createElement("div", {
      className: "col-md-4 service-item"
    }, React.createElement("img", {
      src: service.img,
      alt: ""
    }), React.createElement("p", null, service.title), React.createElement("h6", null, service.descr));
  }))));
});