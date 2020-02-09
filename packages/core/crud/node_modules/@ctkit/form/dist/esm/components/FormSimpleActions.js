import React from 'react';
import FormActions from './FormActions';
import FormButton from './FormButton';
import FormSubmit from './FormSubmit';
import { FormConsumer } from '../support/context';
export default (function (_ref) {
  var submiText = _ref.submiText,
      cancelText = _ref.cancelText,
      onCancel = _ref.onCancel,
      compact = _ref.compact;
  return React.createElement(FormConsumer, null, function (_ref2) {
    var resetForm = _ref2.resetForm;
    return React.createElement(FormActions, null, onCancel && React.createElement(FormButton, {
      compact: compact,
      onClick: function onClick() {
        resetForm();
        onCancel();
      }
    }, cancelText || 'Annuler'), React.createElement(FormSubmit, {
      compact: compact
    }, submiText || 'Enregistrer'));
  });
});