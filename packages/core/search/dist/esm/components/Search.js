import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component, useState, useEffect } from 'react';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import { styled } from "@ctkit/theme";
import debounce from "lodash.debounce";
import filter from "lodash.filter";
import escaperegexp from "lodash.escaperegexp";

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: []
    });

    _defineProperty(_assertThisInitialized(_this), "resetComponent", function () {
      return _this.setState({
        isLoading: false,
        results: [],
        value: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (e, _ref) {
      var value = _ref.value;

      _this.setState({
        isLoading: true,
        value: value
      });

      setTimeout(function () {
        if (_this.state.value.length < 1) return _this.resetComponent();
        var re = new RegExp(escaperegexp(_this.state.value), 'i');

        var isMatch = function isMatch(result) {
          return re.test(result.title);
        };

        _this.setState({
          isLoading: false,
          results: filter(_this.props.data, isMatch)
        });
      }, 300);
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.resetComponent();
    }
  }, {
    key: "handleResultSelect",
    value: function handleResultSelect(e, _ref2) {//this.props.handleResultSelect(result)

      var result = _ref2.result,
          key = _ref2.key;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          value = _this$state.value,
          results = _this$state.results;
      return React.createElement(Grid, null, React.createElement(Grid.Column, {
        width: this.props.width
      }, React.createElement(Search, {
        loading: isLoading,
        onResultSelect: this.handleResultSelect.bind(this),
        onSearchChange: debounce(this.handleSearchChange, 500, {
          leading: true
        }),
        results: results,
        value: value
      })));
    }
  }]);

  return _default;
}(React.Component);

export { _default as default };
var SearchStyle = styled.div.withConfig({
  displayName: "Search__SearchStyle",
  componentId: "sc-17j0heh-0"
})([".ui.search{float:right;margin-top:20px}"]);