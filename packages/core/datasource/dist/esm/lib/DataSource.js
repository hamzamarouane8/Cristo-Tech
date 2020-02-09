import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import Channel from '@ctkit/eventbus';

var DataSource = function DataSource(fetch) {
  var _this = this;

  _classCallCheck(this, DataSource);

  _defineProperty(this, "load", function () {
    if (_this.loading) return;
    _this.loading = true;
    _this.error = null;

    _this.channel.publish('state', {
      loading: true
    });

    _this.fetch().then(function (data) {
      _this.data = data;
    })["catch"](function (err) {
      _this.error = err;
    })["finally"](function () {
      _this.loading = false;

      _this.channel.publish('state', {
        data: _this.data,
        error: _this.error,
        loading: _this.loading
      });
    });
  });

  _defineProperty(this, "subscribe", function (callback) {
    callback({
      loading: _this.loading,
      data: _this.data,
      error: _this.error
    });
    return _this.channel.subscribe('state', function (_ref) {
      var loading = _ref.loading,
          data = _ref.data,
          error = _ref.error;
      callback({
        loading: loading,
        data: data,
        error: error
      });
    });
  });

  this.fetch = fetch;
  this.channel = new Channel();
  this.loading = false;
  this.error = null;
  this.data = null;
};

_defineProperty(DataSource, "type", 'DataSource');

export { DataSource as default };