import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect } from 'react';
var timeout = null;
export default function useDatasource(_ref) {
  var fetch = _ref.fetch,
      remove = _ref.remove,
      save = _ref.save;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      once = _useState8[0],
      setOnce = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      filter = _useState10[0],
      setFilter = _useState10[1];

  var load = function load(args) {
    setLoading(true);
    return fetch(args).then(function (data) {
      setData(data);
      setLoading(false);
      setError(null);

      if (!once) {
        setOnce(true);
      }
    })["catch"](function (err) {
      setError(err.message);
      setLoading(false);
    });
  };

  var _save = function _save(values) {
    if (save) {
      return save(values).then(load);
    }

    throw new Error('Readonly datasource');
  };

  var _remove = function _remove(values) {
    if (remove) {
      return remove(values).then(load);
    }

    throw new Error('Readonly datasource');
  };

  useEffect(function () {
    if (!once) {
      load();
    } else {
      load({
        filter: filter
      });
    }
  }, [filter]);
  return {
    load: load,
    data: data,
    loading: loading,
    error: error,
    once: once,
    filter: filter,
    setFilter: setFilter,
    remove: _remove,
    save: _save
  };
}