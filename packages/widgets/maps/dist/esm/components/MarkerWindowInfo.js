import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import Button from '../test/react/button/src';
import { Divider } from 'semantic-ui-react';
import { Col, Row } from '@ryokit/layout';
import { IcCar, IcDirectionWalk } from '../test/react/icons/src';
import styled from 'styled-components';
var assets = {
  logo: require('../assets/img/Logo-société-generale.png')
};
export default (function (_ref) {
  var marker = _ref.marker;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      activeFilter = _useState2[0],
      setActiveFilter = _useState2[1];

  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "modal-wrapper"
  }, React.createElement(EllipseLogo, null, React.createElement("div", {
    style: {
      zIndex: 1,
      padding: '18px',
      width: '60px',
      height: '60px'
    }
  }, React.createElement("img", {
    src: assets.logo,
    alt: ""
  }))), React.createElement("Container-fluid", null, React.createElement(Row, {
    className: "ui-header",
    style: {
      textAlign: 'center',
      marginTop: '30px',
      marginBottom: '20px'
    }
  }, React.createElement(Col, null, marker.name, React.createElement("span", null, marker.description))), React.createElement(Row, {
    style: {
      marginBottom: '14px'
    }
  }, React.createElement(Col, {
    md: 6
  }, React.createElement(ButtonItinerary, {
    active: activeFilter,
    icon: React.createElement(IcDirectionWalk, null),
    onClick: function onClick() {
      setActiveFilter(true);
    }
  }, "90km")), React.createElement(Col, {
    md: 6
  }, React.createElement(ButtonItinerary, {
    active: !activeFilter,
    icon: React.createElement(IcCar, null),
    onClick: function onClick() {
      setActiveFilter(false);
    }
  }, "100km"))), React.createElement(Divider, {
    fitted: true
  }), React.createElement(Row, {
    style: {
      marginTop: '1px',
      padding: '0',
      textAlign: 'center'
    }
  }, React.createElement(Col, {
    md: 6
  }, "Lundi au vendredi", React.createElement("span", null, "08:30 - 16:00")), React.createElement(Col, {
    md: 6
  }, "Samedi", React.createElement("span", null, "Ferm\xE9e"))), React.createElement(Row, {
    style: {
      marginTop: '1px',
      padding: '0',
      textAlign: 'center'
    }
  }, React.createElement(Col, {
    md: 6
  }, "T\xE9l\xE9phone", React.createElement("span", null, "+212 522 853 095")), React.createElement(Col, {
    md: 6
  }, "Fax", React.createElement("span", null, "+212 522 853 098"))), React.createElement(Row, {
    style: {
      margin: '0 auto'
    }
  }, React.createElement(Col, {
    md: 12
  }, React.createElement(IteniraryButton, null, "ITINERAIRE"))))));
});
/*-------------PopUp---------------*/
// TODO: Migration styled(baseui) -> styled-components

/*
position: absolute,
  zIndex: 1,
  marginLeft: '35%',
  marginTop: '-90px',
  display: 'inline-block',
  width: '60px',
  height: '60px',
  borderRadius: '50px',
  boxShadow: '0 10px 20px 0 rgba(194, 200, 221, 0.3)',
  background: '#ffffff'
 */

var EllipseLogo = styled.div.withConfig({
  displayName: "MarkerWindowInfo__EllipseLogo",
  componentId: "hcoqi0-0"
})([""]);
/*
 width: '100%',
  background: active ? '#f5930d!important' : '#fff!important',
  borderRadius: '20px!important',
  color: active ? '#FFF!important' : '#a3a6b1!important',
  border: !active ? '1px solid #a3a6b1!important' : 'none',
 */

var ButtonItinerary = styled(Button).withConfig({
  displayName: "MarkerWindowInfo__ButtonItinerary",
  componentId: "hcoqi0-1"
})([""]);
/*
width: '100%!important',
  background: '#4285f4!important',
  borderRadius: '4px!important',
  color: '#FFF!important',
  boxShadow: '0 10px 30px 0 rgba(109, 109, 128, 0.2)!important'
 */

var IteniraryButton = styled(Button).withConfig({
  displayName: "MarkerWindowInfo__IteniraryButton",
  componentId: "hcoqi0-2"
})([""]);