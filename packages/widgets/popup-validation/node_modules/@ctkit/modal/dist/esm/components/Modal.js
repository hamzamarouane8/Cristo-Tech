import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  var top = 50;
  var left = 50;
  return {
    top: "".concat(top, "%"),
    left: "".concat(left, "%"),
    transform: "translate(-".concat(top, "%, -").concat(left, "%)")
  };
}

var styles = function styles(theme) {
  return {
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none'
    }
  };
};

var SimpleModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SimpleModal, _React$Component);

  function SimpleModal() {
    _classCallCheck(this, SimpleModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleModal).apply(this, arguments));
  }

  _createClass(SimpleModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          openModal = _this$props.openModal,
          children = _this$props.children,
          close = _this$props.close;
      return React.createElement(React.Fragment, null, React.createElement(Modal, {
        "aria-labelledby": "simple-modal-title",
        "aria-describedby": "simple-modal-description",
        open: openModal,
        onClose: close
      }, React.createElement("div", {
        style: getModalStyle(),
        className: classes.paper
      }, children)));
    }
  }]);

  return SimpleModal;
}(React.Component);

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};
var SimpleModalWrapped = withStyles(styles)(SimpleModal);
export default SimpleModalWrapped;