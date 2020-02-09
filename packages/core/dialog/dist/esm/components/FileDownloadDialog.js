import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useState, useEffect } from 'react';
import Dialog from './Dialog';
import Spinner from '@ctkit/spinner';
import Button from '@ctkit/button';
import { saveAs } from 'file-saver';
import { IcDownload } from '@ctkit/icons';
export default (function (_ref) {
  var onClose = _ref.onClose,
      resourceName = _ref.resourceName,
      prepare = _ref.prepare,
      props = _objectWithoutProperties(_ref, ["onClose", "resourceName", "prepare"]);

  return React.createElement(Dialog, _extends({}, props, {
    onClose: onClose
  }), React.createElement("div", {
    className: "text-center"
  }, React.createElement(DialogContent, {
    onClose: onClose,
    prepare: prepare,
    resourceName: resourceName
  })));
});

var DialogContent = function DialogContent(_ref2) {
  var onClose = _ref2.onClose,
      resourceName = _ref2.resourceName,
      prepare = _ref2.prepare;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      resource = _useState2[0],
      setResource = _useState2[1];

  useEffect(function () {
    setTimeout(function () {
      prepare().then(function (resource) {
        return setResource(resource);
      });
    }, 1000);
  }, []);
  var controller = {
    download: function download() {
      saveAs(resource, resourceName);
      onClose();
    }
  };

  if (!resource) {
    return React.createElement(React.Fragment, null, React.createElement("h6", {
      className: "mt-5 mb-3"
    }, "Votre t\xE9l\xE9chargement est en cours de pr\xE9paration."), React.createElement("div", {
      className: "clearfix mb-4"
    }, React.createElement(Spinner, null)), React.createElement(Button, {
      compact: true,
      onClick: onClose
    }, "Annuler"));
  } else {
    return React.createElement(React.Fragment, null, React.createElement("h6", {
      className: "mt-5 mb-3"
    }, "Votre fichier est pr\xEAt."), React.createElement(Button, {
      icon: React.createElement(IcDownload, null),
      onClick: controller.download
    }, "T\xE9l\xE9charger"));
  }
};