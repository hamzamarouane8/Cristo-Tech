import React from 'react';
import isString from 'lodash.isstring';
export default (function (_ref) {
  var brand = _ref.brand;
  var content = null;

  if (isString(brand)) {
    content = brand;
  } else {
    content = React.createElement("img", {
      src: brand.image,
      style: {
        width: 'auto',
        height: 22
      },
      alt: brand.name
    });
  }

  return React.createElement("div", {
    className: "ui brand"
  }, content);
});