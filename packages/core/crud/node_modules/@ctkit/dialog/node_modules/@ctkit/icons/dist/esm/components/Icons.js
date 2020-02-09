import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _SIZE_MAPPING;

import React from 'react';
import { FiMoreVertical, FiUsers, FiPlus, FiTrash2, FiEdit2, FiMapPin, FiLock, FiLifeBuoy, FiSearch, FiPhone, FiLayers, FiCalendar, FiFilter } from 'react-icons/fi';
import { Sizes } from '@ctkit/constants';
import { TiExport } from 'react-icons/ti';
import { MdClose, MdGroup, MdPayment, MdPictureAsPdf, MdFileDownload, MdDirectionsCar, MdDirectionsWalk } from 'react-icons/md';
var SIZE_MAPPING = (_SIZE_MAPPING = {}, _defineProperty(_SIZE_MAPPING, Sizes.XXS, 12), _defineProperty(_SIZE_MAPPING, Sizes.XS, 14), _defineProperty(_SIZE_MAPPING, Sizes.SM, 16), _defineProperty(_SIZE_MAPPING, Sizes.MD, 24), _defineProperty(_SIZE_MAPPING, Sizes.LG, 32), _defineProperty(_SIZE_MAPPING, Sizes.XL, 48), _defineProperty(_SIZE_MAPPING, Sizes.XXL, 64), _SIZE_MAPPING);

var icon = function icon(Component) {
  return function (props) {
    var size = Sizes.fromProps(props || {});
    return React.createElement(Component, {
      size: SIZE_MAPPING[size] || 16
    });
  };
};

export var IcMoreVertical = icon(FiMoreVertical);
export var IcClose = icon(MdClose);
export var IcCar = icon(MdDirectionsCar);
export var IcDirectionWalk = icon(MdDirectionsWalk);
export var IcAdd = icon(FiPlus);
export var IcPlus = IcAdd;
export var IcTrash = icon(FiTrash2);
export var IcEdit = icon(FiEdit2);
export var IcUsers = icon(FiUsers);
export var IcUsersFilled = icon(MdGroup);
export var IcMapPin = icon(FiMapPin);
export var IcLock = icon(FiLock);
export var IcPayment = icon(MdPayment);
export var IcHealth = icon(FiLifeBuoy);
export var IcSearch = icon(FiSearch);
export var IcPhone = icon(FiPhone);
export var IcPdf = icon(MdPictureAsPdf);
export var IcExport = icon(TiExport);
export var IcDownload = icon(MdFileDownload);
export var IcStack = icon(FiLayers);
export var IcCalendar = icon(FiCalendar);
export var IcFilter = icon(FiFilter);