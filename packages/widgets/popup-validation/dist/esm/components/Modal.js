import React from 'react';
import Button from '@ctkit/button';
import { Col, Row } from '@ctkit/layout';
import { styled } from '@ctkit/theme';
import ReactCodeInput from 'react-code-input';
import classnames from 'classnames';
import Modal from '@ctkit/modal';
import isString from 'lodash.isstring'; //-----------------------------------------------------------------------------

export default (function (_ref) {
  var open = _ref.open,
      closeModal = _ref.closeModal,
      handleCode = _ref.handleCode,
      onClick = _ref.onClick,
      messageError = _ref.messageError,
      header = _ref.header,
      description = _ref.description,
      numInputs = _ref.numInputs,
      image = _ref.image,
      actions = _ref.actions;
  return React.createElement(Modal, {
    openModal: open,
    close: function close() {
      return closeModal();
    },
    closeParam: false
  }, React.createElement(Root, {
    className: classnames('clearfix')
  }, React.createElement("div", {
    className: "rui-content"
  }, isString(image) ? React.createElement("img", {
    src: image,
    alt: "",
    width: 100
  }) : image, header && React.createElement("h4", null, header), React.createElement("p", null, description), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-12"
  }, React.createElement(ReactCodeInput, {
    onChange: function onChange(code) {
      return handleCode(code);
    },
    numInputs: numInputs
  }), messageError && React.createElement("div", null, " ", messageError))), actions && React.createElement(React.Fragment, null, actions.submit && React.createElement("div", {
    className: "mt-4 clearfix rui-actions"
  }, React.createElement(Button, {
    size: "large",
    primary: true,
    onClick: actions.submit.onClick
  }, actions.submit.text)), actions.cancel && React.createElement("div", {
    className: "mt-4 clearfix rui-actions"
  }, React.createElement("a", {
    href: "#"
  }, actions.cancel.text))))));
});
var Root = styled.div.withConfig({
  displayName: "Modal__Root",
  componentId: "vzdx0t-0"
})(["margin:auto;width:100%;text-align:center;"]);