import React from 'react';
import { FormConsumer } from '../support/context';
import FormFields from './FormFields';
import FormField from './FormField';
import map from 'lodash.map';
export default (function (_ref) {
  var spans = _ref.spans,
      compact = _ref.compact;
  return React.createElement(FormConsumer, null, function (_ref2) {
    var fields = _ref2.fields;
    return React.createElement(FormFields, null, map(fields, function (f, name) {
      return React.createElement(FormField, {
        key: name,
        name: name,
        spans: spans,
        compact: compact
      });
    }));
  });
});