import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import ReactApexChart from 'react-apexcharts';

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      series: {},
      options: {},
      type: 'line'
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        series: this.props.series,
        options: this.props.options,
        type: this.props.type
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        series: nextProps.series,
        options: nextProps.options,
        type: nextProps.type
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          series = _this$props.series,
          type = _this$props.type,
          title = _this$props.title;
      return React.createElement(React.Fragment, null, React.createElement(ReactApexChart, {
        options: options,
        series: series,
        type: type,
        height: "300"
      }));
    }
  }]);

  return _default;
}(React.Component);

export { _default as default };