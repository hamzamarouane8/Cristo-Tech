import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n.ui-title{\n  font-size:26px;\n  font-weight:700;\n  margin-top:40px;\n  line-height: 1.5;\n  text-transform:uppercase;\n  width:94%;\n}\n.ui-description{\n}\n.ui-action{\n  .ui.button{\n    padding: 15px 40px;\n    margin-bottom:30px;\n    display: block;\n    margin-left: 0;\n    background: #E9041E;\n    color: #fff;\n    font-size: 12px;\n    text-transform: uppercase;\n  }\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto!important;\n  width: 80px!important;\n  height: 6px!important;\n  background: #E84E61!important;\n  border-radius: 6px!important;\n  margin-top: 20px!important;\n  margin-bottom:20px!important;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n.ui-title{\n  text-transform:uppercase;\n  width: 40%;\n\tcolor: #010035;\n\tfont-weight: 800;\n\tfont-size: 24px;\n\tmargin: 0 auto;\n\ttext-align: center;\n\tline-height: 1.2;\n\tmargin-top:40px;\n}\n.ui-sub-title {\n\tmargin-top: 20px;\n\tcolor: #474752;\n\ttext-align: center;\n}\n.item-iiimg{\nimg{\n\twidth: 80px;\n\theight: 80px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tdisplay: block;\n\t}\n}\n.item-title{\n  width:80%;\n  margin: 0 auto;\n\tmargin-top: 20px;\n\tcolor: #010035;\n\tfont-size: 18px;\n\ttext-align:center;\n\tfont-weight: 800;\n\tmargin-bottom: 20px;\n}\n\n.item-desc{\n\tcolor: #6D6D80;\n\ttext-align: center;\n\tmargin: 0 auto;\n\twidth: 80%;\n\tfont-size: 13px;\n}\n.ui-action{\n  .ui.button{\n    text-transform:uppercase;\n    padding: 14px 40px;\n    margin-left: auto;\n    margin-right: auto;\n    background: #E9041E;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 4px!important;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useEffect, useState } from 'react';
import { Divider } from "@ctkit/layout";
import { Carousel1 } from '@ctkit/w-carousel';
import { Footer1 } from '@ctkit/w-footer';
import { Features1 } from '@ctkit/w-features';
import { styled } from '@ctkit/theme';
import get from 'lodash.get';
import { Helmet } from 'react-helmet';
import { Slider, SecondHeader, Resume, Counter, Portfolio, Services, Testimonial, Pricing } from '../../features/home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default (function (_ref) {
  var contentService = _ref.contentService;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      content = _useState4[0],
      setContent = _useState4[1];

  useEffect(function () {
    setLoading(true);
    /* contentService.loadBaseContent().then((data) => {
       setContent(data)
       setLoading(false)
     })*/
  }, []);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "Container"
  }, React.createElement(Slider, null), React.createElement(SecondHeader, null), React.createElement(Resume, null), React.createElement(Counter, null), React.createElement(Portfolio, null), React.createElement(Services, null), React.createElement(Testimonial, null), React.createElement(Pricing, null)));
});
var FeatureContainer = styled.div(_templateObject());
var DividerRed = styled(Divider)(_templateObject2());
var CarouselContainer = styled.div(_templateObject3());