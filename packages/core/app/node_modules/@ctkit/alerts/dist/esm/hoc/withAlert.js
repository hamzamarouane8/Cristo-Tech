import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { withSnackbar } from 'notistack';
import get from 'lodash.get';
export default (function (Component) {
  var HOC = function HOC(_ref) {
    var closeSnackbar = _ref.closeSnackbar,
        enqueueSnackbar = _ref.enqueueSnackbar,
        onPresentSnackbar = _ref.onPresentSnackbar,
        props = _objectWithoutProperties(_ref, ["closeSnackbar", "enqueueSnackbar", "onPresentSnackbar"]);

    var errors = {
      reportError: function reportError(e) {
        return enqueueSnackbar(get(e, 'message') || e, {
          variant: 'error'
        });
      }
    };
    return React.createElement(Component, _extends({}, props, errors));
  };

  return withSnackbar(HOC);
});