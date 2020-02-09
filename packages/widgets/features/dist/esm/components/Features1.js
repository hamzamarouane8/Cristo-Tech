import React from 'react';
import { Col, Row } from '@ctkit/layout';
import Button from '@ctkit/button';
import { styled } from '@ctkit/theme';
import { CardsStyle } from './styles';
export default (function (_ref) {
  var loading = _ref.loading,
      title = _ref.title,
      description = _ref.description,
      cta = _ref.cta,
      items = _ref.items;

  //TODO: Eanble Skeleton and loading mode
  if (!items || items.length !== 3) {
    console.warn('expected: features.length.3');
    return null;
  }

  return React.createElement(CardsStyle, null, React.createElement("div", {
    className: "clearfix text-center mb-5"
  }, React.createElement(Title, {
    className: "ui-title"
  }, title), React.createElement(SubTitle, {
    className: "ui-sub-title"
  }, description)), React.createElement("div", {
    className: "mt-5 mb-5 clearfix"
  }, React.createElement(Row, null, items.map(function (item, index) {
    return React.createElement(Col, {
      md: 4,
      className: "text-center",
      key: index
    }, React.createElement(ItemImgHolder, {
      className: "item-img"
    }, React.createElement("img", {
      src: item.img,
      alt: "",
      width: 40
    })), React.createElement(ItemTitle, {
      className: "item-title"
    }, item.title), React.createElement(ItemDesc, {
      className: "item-desc"
    }, item.description));
  }))), cta && React.createElement("div", {
    className: "clearfix text-center ui-action mt-5"
  }, React.createElement(Button, {
    ghost: true
  }, cta.text)));
});
var Title = styled.h4.withConfig({
  displayName: "Features1__Title",
  componentId: "sc-14huxxz-0"
})(["line-height:1.1;font-weight:600;display:inline-block;width:'50%'"]);
var SubTitle = styled.p.withConfig({
  displayName: "Features1__SubTitle",
  componentId: "sc-14huxxz-1"
})(["line-height:1.2;display:inline-block;width:80%;color:#9999;"]);
var ItemTitle = styled.h5.withConfig({
  displayName: "Features1__ItemTitle",
  componentId: "sc-14huxxz-2"
})(["font-weight:500;display:block;"]);
var ItemImgHolder = styled.div.withConfig({
  displayName: "Features1__ItemImgHolder",
  componentId: "sc-14huxxz-3"
})(["width:40px;height:40px;margin:auto;overflow:hidden;"]);
var ItemDesc = styled.p.withConfig({
  displayName: "Features1__ItemDesc",
  componentId: "sc-14huxxz-4"
})(["padding:0 20px;font-size:0.9em;"]);