import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import get from 'lodash.get';
import isFunction from 'lodash.isfunction';
import Loader from '@ctkit/loader';
import Dialog from '@ctkit/dialog';
import { Fab } from '@ctkit/button';
import { alertDialog } from '@ctkit/alerts';
import { Heading } from '@ctkit/text';
import { IcPlus } from '@ctkit/icons';

var CRUD =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CRUD, _PureComponent);

  function CRUD() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CRUD);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CRUD)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      once: false,
      loading: false,
      data: null,
      editDialog: false,
      editRecord: null
    });

    _defineProperty(_assertThisInitialized(_this), "load", function () {
      _this.setState({
        loading: true
      });

      return _this.props.controller.fetch().then(function (data) {
        _this.setState({
          data: data,
          once: true
        });
      })["finally"](function () {
        _this.setState({
          loading: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "save", function (values) {
      return _this.props.controller.save(values).then(_this.load)["finally"](_this.closeEditDialog());
    });

    _defineProperty(_assertThisInitialized(_this), "remove", function (id) {
      // Optimistic delete
      var message = get(_this.props.message, 'remove_confirm') || 'Cette opération est irréversible. Souhaitez-vous continuer?';
      alertDialog.confirm('Suppression', message, {
        danger: true
      }).then(function () {
        _this.setState({
          data: _this.state.data.filter(function (el) {
            return el.id !== id;
          })
        });

        _this.props.controller.remove(id)["finally"](_this.load);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openEditDialog", function (model) {
      // Transform model to form model
      _this.setState({
        editDialog: true,
        editRecord: model
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeEditDialog", function () {
      return _this.setState({
        editDialog: false,
        editRecord: null
      });
    });

    return _this;
  }

  _createClass(CRUD, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.load();
      var channel = this.props.channel;

      if (channel) {
        this._subscription = channel.subscribe('openEditDialog', function () {
          _this2.setState({
            editDialog: true,
            editRecord: null
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var onDestroy = this.props.onDestroy;

      if (this._subscription) {
        this._subscription.unsubscribe();
      }

      if (onDestroy) onDestroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          loading = _this$state.loading,
          data = _this$state.data,
          once = _this$state.once,
          editRecord = _this$state.editRecord,
          editDialog = _this$state.editDialog;
      var _this$props = this.props,
          header = _this$props.header,
          content = _this$props.content,
          form = _this$props.form,
          title = _this$props.title,
          description = _this$props.description,
          messages = _this$props.messages,
          dialogWidth = _this$props.dialogWidth;
      return React.createElement(React.Fragment, null, header || React.createElement(Heading, {
        xlarge: true,
        text: title,
        caption: description
      }), React.createElement(Loader, {
        loading: loading && !once
      }, (!loading || once) && content({
        data: data,
        removeItem: this.remove,
        openEditDialog: this.openEditDialog
      })), React.createElement(Dialog, {
        title: editRecord ? get(messages, 'dialog_edit_title') || 'Modification' : get(messages, 'dialog_create_title') || 'Nouvel enregistrement',
        isOpen: editDialog,
        onClose: this.closeEditDialog,
        width: dialogWidth || 380
      }, editDialog && isFunction(form) && form({
        closeModal: this.closeEditDialog,
        values: editRecord,
        onSubmit: this.save
      })), React.createElement(Fab, {
        onClick: function onClick() {
          return _this3.openEditDialog();
        }
      }, React.createElement(IcPlus, null)));
    }
  }]);

  return CRUD;
}(PureComponent);

export { CRUD as default };