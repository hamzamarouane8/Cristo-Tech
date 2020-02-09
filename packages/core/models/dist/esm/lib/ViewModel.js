import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import pick from 'lodash.pick';
import map from 'lodash.map';

var _default = function _default(schema) {
  var _this = this;

  _classCallCheck(this, _default);

  _defineProperty(this, "form", function (fields) {
    var form = _this.schema;

    if (fields) {
      form = pick(_this.schema, fields);
    }

    return form;
  });

  _defineProperty(this, "columns", function (fields) {
    var selection = _this.schema;

    if (fields) {
      selection = pick(_this.schema, fields);
    }

    return map(selection, function (_ref, name) {
      var colSize = _ref.colSize,
          label = _ref.label,
          type = _ref.type;
      return {
        name: name,
        header: label,
        type: type,
        width: colSize
      };
    });
  });

  this.schema = schema;
};

export { _default as default };