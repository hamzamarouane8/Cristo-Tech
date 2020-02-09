import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _SIZES_MAPPING;

import React from 'react';
import Spinner from '@atlaskit/spinner';
import { Sizes } from '@ctkit/constants';
var SIZES_MAPPING = (_SIZES_MAPPING = {}, _defineProperty(_SIZES_MAPPING, Sizes.XXS, 'xsmall'), _defineProperty(_SIZES_MAPPING, Sizes.XS, 'xsmall'), _defineProperty(_SIZES_MAPPING, Sizes.SM, 'small'), _defineProperty(_SIZES_MAPPING, Sizes.MD, 'medium'), _defineProperty(_SIZES_MAPPING, Sizes.LG, 'large'), _defineProperty(_SIZES_MAPPING, Sizes.XL, 'xlarge'), _defineProperty(_SIZES_MAPPING, Sizes.XXL, 'xlarge'), _SIZES_MAPPING);
export default (function (_ref) {
  var size = _ref.size;
  return React.createElement(Spinner, {
    size: SIZES_MAPPING[size]
  });
});