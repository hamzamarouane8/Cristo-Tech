import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GlobalEvents } from '@ctkit/eventbus';
import isEmpty from 'lodash.isempty';

var GraphClient = function GraphClient(uri) {
  var _this = this;

  _classCallCheck(this, GraphClient);

  _defineProperty(this, "call", function (query, variables) {
    var res = null;

    if (query.trim().indexOf('mutation') === 0) {
      res = _this.client.mutate({
        mutation: gql(_templateObject(), query),
        variables: variables
      });
    } else {
      res = _this.client.query({
        query: gql(_templateObject2(), query),
        variables: variables
      });
    }

    return res.then(function (_ref) {
      var data = _ref.data,
          errors = _ref.errors;

      if (!isEmpty(errors)) {
        throw new Error(errors[0].message);
      }

      var keys = Object.keys(data);
      return keys.length === 1 ? data[keys[0]] : data;
    })["catch"](function (err) {
      GlobalEvents.publish('message', {
        error: err.message
      });
    });
  });

  var defaultOptions = {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    },
    mutate: {
      errorPolicy: 'all'
    }
  };
  this.client = new ApolloClient({
    uri: uri,
    cache: new InMemoryCache({
      addTypename: false
    })
  });
  this.client.defaultOptions = defaultOptions;
};

export { GraphClient as default };