import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import axios from 'axios';
import get from 'lodash.get';

var HttpClient = function HttpClient(_props) {
  var _this = this;

  _classCallCheck(this, HttpClient);

  _defineProperty(this, "call", function (method, url, props) {
    var _ref = props || {},
        baseURL = _ref.baseURL,
        data = _ref.data,
        bearer = _ref.bearer,
        timeout = _ref.timeout;

    var headers = (props || {}).headers || {};

    if (bearer) {
      headers['Authorization'] = 'Bearer ' + bearer;
    }

    return axios({
      method: method,
      baseURL: baseURL,
      url: url,
      data: data,
      timeout: timeout || 5000,
      headers: headers
    }).then(function (response) {
      return response;
    })["catch"](function (err) {
      var message = get(err, 'response.data.message') || get(err, 'response.message') || get(err, 'response.data') || get(err, 'message');
      throw new Error(message);
    });
  });

  _defineProperty(this, "post", function (url, props) {
    return _this.call('POST', url, props);
  });

  _defineProperty(this, "get", function (url, props) {
    return _this.call('GET', url, props);
  });

  _defineProperty(this, "delete", function (url, props) {
    return _this.call('DELETE', url, props);
  });

  this.props = _props;
};

export { HttpClient as default };
;