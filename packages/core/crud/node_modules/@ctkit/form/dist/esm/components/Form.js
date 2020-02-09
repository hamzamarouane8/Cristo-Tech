import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import forEach from 'lodash.foreach';
import isString from 'lodash.isstring';
import isEmpty from 'lodash.isempty';
import pick from 'lodash.pick';
import get from 'lodash.get';
import * as Yup from 'yup';
import { Sizes } from '@ctkit/constants'; // ------------------------------------------------------------------------

import { FormProvider } from '../support/context';
import FormSubmit from './FormSubmit';
import FormButton from './FormButton';
import FormActions from './FormActions';
import FormFields from './FormFields';
import FormField from './FormField';
import FormSimpleFields from './FormSimpleFields';
import FormSimpleActions from './FormSimpleActions'; // import 'semantic-ui-css/components/form.css';

var Form =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Form, _PureComponent);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));

    if (!props.fields) {
      throw new Error('INVALID_FORM_NO_FIELDS');
    }

    var shape = {};
    forEach(props.schema || props.fields, function (f, name) {
      shape[name] = Yup.string();
      var check = f.validation || f.check || {};

      if (f.required || check.required) {
        shape[name] = shape[name].required(isString(f.required) ? f.required : 'Obligatoire');
      } else {
        shape[name] = shape[name].nullable();
      }

      if (f.email || check.email || f.type === 'email') {
        shape[name] = shape[name].email(isString(f.email) ? f.email : 'Email invalide');
      }

      if (f.minLength || check.min) {
        shape[name] = shape[name].min(f.minLength || check.min, "Minimum: ".concat(f.minLength || check.min, " caract\xE8res"));
      }
    });
    _this.fieldsKeys = Object.keys(props.fields).concat('id');
    _this.schema = Yup.object().shape(shape);
    return _this;
  }

  _createClass(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          initialValues = _this$props.initialValues,
          children = _this$props.children,
          render = _this$props.render,
          onError = _this$props.onError,
          fields = _this$props.fields,
          _onSubmit = _this$props.onSubmit,
          props = _objectWithoutProperties(_this$props, ["initialValues", "children", "render", "onError", "fields", "onSubmit"]);

      var size = Sizes.fromProps(props);
      var _initialValues = {};

      if (!isEmpty(initialValues)) {
        this.fieldsKeys.forEach(function (name) {
          var value = get(initialValues, name);

          if (fields[name]) {
            if (fields[name].path) {
              _initialValues[name] = get(initialValues, fields[name].path) || value;
            } else {
              _initialValues[name] = value;
            }
          } else {
            _initialValues[name] = value;
          }
        });
      }

      return React.createElement(Formik, {
        initialValues: _initialValues,
        isInitialValid: this.schema.isValidSync(_initialValues || {}),
        validationSchema: this.schema,
        onSubmit: function onSubmit(values, _ref) {
          var setSubmitting = _ref.setSubmitting,
              resetForm = _ref.resetForm;
          var filteredValues = pick(values, _this2.fieldsKeys);

          if (isEmpty(filteredValues)) {
            setSubmitting(false);
            return;
          }

          Promise.resolve(_onSubmit(filteredValues)).then(function (res) {
            // setSubmitting(false)
            if (_this2.mounted && res !== false) {
              resetForm(_initialValues || {});
            }
          })["catch"](function (e) {
            onError && onError(e);
          })["finally"](function () {
            if (_this2.mounted) {
              setSubmitting(false);
            }
          });
        }
      }, function (_ref2) {
        var values = _ref2.values,
            errors = _ref2.errors,
            touched = _ref2.touched,
            isValid = _ref2.isValid,
            handleChange = _ref2.handleChange,
            setFieldValue = _ref2.setFieldValue,
            handleBlur = _ref2.handleBlur,
            handleSubmit = _ref2.handleSubmit,
            isSubmitting = _ref2.isSubmitting,
            resetForm = _ref2.resetForm;
        var submitDisabled = isSubmitting || !isValid;
        return React.createElement("form", {
          onSubmit: handleSubmit
        }, React.createElement(FormProvider, {
          value: {
            values: values,
            size: size,
            resetForm: resetForm,
            errors: errors,
            touched: touched,
            handleChange: handleChange,
            setFieldValue: setFieldValue,
            handleBlur: handleBlur,
            isSubmitting: isSubmitting,
            handleSubmit: handleSubmit,
            submitDisabled: submitDisabled,
            fields: fields
          }
        }, render && render(), children));
      });
    }
  }]);

  return Form;
}(PureComponent);

_defineProperty(Form, "Fields", FormFields);

_defineProperty(Form, "Field", FormField);

_defineProperty(Form, "Submit", FormSubmit);

_defineProperty(Form, "Button", FormButton);

_defineProperty(Form, "Actions", FormActions);

_defineProperty(Form, "SimpleActions", FormSimpleActions);

_defineProperty(Form, "SimpleFields", FormSimpleFields);

export default Form;