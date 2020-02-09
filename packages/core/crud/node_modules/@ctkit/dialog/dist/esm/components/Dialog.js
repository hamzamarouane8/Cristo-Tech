import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { IcClose } from '@ctkit/icons';
import Slide from '@material-ui/core/Slide';
import { Row, Col } from '@ctkit/layout';
import Link from '@ctkit/link';
import { StyledDialog, StyledDialogTitle } from '../styles';

var FullScreenDialogTitle = function FullScreenDialogTitle(_ref) {
  var title = _ref.title,
      onClose = _ref.onClose;
  return React.createElement(StyledDialogTitle, null, React.createElement(Row, null, React.createElement(Col, {
    md: 8
  }, React.createElement("div", {
    className: "rk rk-dialog-title"
  }, title)), React.createElement(Col, {
    md: 4,
    className: "text-right"
  }, React.createElement(Link, {
    onClick: onClose,
    style: {
      "float": 'right',
      marginTop: -8
    }
  }, React.createElement(IcClose, {
    large: true
  })))));
};

var SimpleDialogTitle = function SimpleDialogTitle(_ref2) {
  var title = _ref2.title;
  return React.createElement(DialogTitle, null, title);
};

var Transition = function Transition(props) {
  return React.createElement(Slide, _extends({
    direction: "up"
  }, props));
};

export default (function (_ref3) {
  var fullScreen = _ref3.fullScreen,
      children = _ref3.children,
      isOpen = _ref3.isOpen,
      okText = _ref3.okText,
      cancelText = _ref3.cancelText,
      title = _ref3.title,
      onClose = _ref3.onClose,
      width = _ref3.width,
      onConfirm = _ref3.onConfirm;
  return React.createElement(StyledDialog, {
    className: fullScreen ? 'full-screen' : 'no-full-screen',
    onClose: onClose,
    open: isOpen,
    fullScreen: fullScreen,
    TransitionComponent: Transition
  }, title && fullScreen && React.createElement(FullScreenDialogTitle, {
    title: title,
    onClose: onClose
  }), title && !fullScreen && React.createElement(SimpleDialogTitle, {
    title: title
  }), React.createElement(DialogContent, {
    className: "rui rui-dialog-content",
    style: {
      paddingBottom: 35,
      overflowY: 'initial'
    }
  }, React.createElement("div", {
    style: {
      width: width || (fullScreen ? null : 400)
    },
    className: "clearfix"
  }, children)), (okText || cancelText) && React.createElement(DialogActions, null, React.createElement("div", {
    style: {
      padding: '0 8px 10px'
    }
  }, cancelText && React.createElement(Button, {
    onClick: onClose,
    color: 'secondary'
  }, cancelText), okText && React.createElement(Button, {
    onClick: onConfirm,
    color: 'primary'
  }, okText))));
});