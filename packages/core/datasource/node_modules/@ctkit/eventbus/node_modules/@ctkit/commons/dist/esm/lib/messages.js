import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var Messages = function Messages(messages) {
  var _this = this;

  _classCallCheck(this, Messages);

  _defineProperty(this, "catch", function (err) {
    var msg = err.message;
    throw new Error(_this.messages[msg] || msg);
  });

  this.messages = messages || {};
};

export { Messages as default };