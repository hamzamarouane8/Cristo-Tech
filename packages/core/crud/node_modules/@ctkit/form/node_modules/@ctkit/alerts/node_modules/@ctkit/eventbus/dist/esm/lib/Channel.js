import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import postal from 'postal';
import { UUID } from '@ctkit/commons';

var Channel =
/*#__PURE__*/
function () {
  function Channel(id) {
    _classCallCheck(this, Channel);

    this.channel = postal.channel(id || UUID.create());
  }

  _createClass(Channel, [{
    key: "publish",
    value: function publish(event, payload) {
      this.channel.publish(event, payload);
    }
  }, {
    key: "subscribe",
    value: function subscribe(event, callback) {
      var s = this.channel.subscribe(event, callback);
      return {
        unsubscribe: function unsubscribe() {
          return s.unsubscribe();
        }
      };
    }
  }]);

  return Channel;
}();

export { Channel as default };