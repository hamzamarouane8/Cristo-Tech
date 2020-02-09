import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import styled from "styled-components";
import _ from 'lodash';
import faker from 'faker';
import React, { Component, useState, useEffect } from 'react';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

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
        var re = new RegExp(_.escapeRegExp(_this.state.value), 'i');

        var isMatch = function isMatch(result) {
          return re.test(result.title);
        };

        _this.setState({
          isLoading: false,
          results: _.filter(_this.props.data, isMatch)
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
    value: function handleResultSelect(e, _ref2) {
      var result = _ref2.result,
          key = _ref2.key;
      this.props.handleSelectMarker(result);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          value = _this$state.value,
          results = _this$state.results;
      return React.createElement(Grid, null, React.createElement(Grid.Column, {
        width: 8
      }, React.createElement(Search, {
        loading: isLoading,
        onResultSelect: this.handleResultSelect.bind(this),
        onSearchChange: _.debounce(this.handleSearchChange, 500, {
          leading: true
        }),
        results: results,
        value: value
      })));
    }
  }]);

  return _default;
}(React.Component);
/*export default({data})=>{
  const [list ,setList] = useState([]);
  const[isLoading,setIsLoading] = useState(false);
  const[results,setResults] = useState([]);
  const[val,setVal] = useState('');

  useEffect(() => {
    resetComponent()
  }, []);


  function resetComponent(){
    setIsLoading(false);
    setResults([]);
    setVal('');
  }


  function handleSearchChange(e, { value }){
    setIsLoading(true);
    setVal(value)
    setTimeout(() => {
      if (val.length < 1) return resetComponent()
      const re = new RegExp(_.escapeRegExp(val), 'i')
      const isMatch = result => re.test(result.title)
      setIsLoading(false);
      setResults(_.filter(data, isMatch))
    }, 300)
  }

  return(
    <Grid>
      <Grid.Column  width={8}>
        <Search
          loading={isLoading}
          //onResultSelect={this.handleResultSelect.bind(this)}
          onSearchChange={_.debounce(handleSearchChange, 500, { leading: true })}
          results={results}
          value={val}
        />
      </Grid.Column>

    </Grid>
  )
}
*/


export { _default as default };
var SearchStyle = styled.div.withConfig({
  displayName: "Search__SearchStyle",
  componentId: "qnep7e-0"
})([".ui.search{float:right;margin-top:20px}"]);