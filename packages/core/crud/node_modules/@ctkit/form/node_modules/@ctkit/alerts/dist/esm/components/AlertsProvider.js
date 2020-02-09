import React, { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import styled from 'styled-components';
import withAlert from '../hoc/withAlert';
import { GlobalEvents } from '@ctkit/eventbus';
var GlobalAlerts = withAlert(function (_ref) {
  var reportError = _ref.reportError;
  useEffect(function () {
    var subscription = GlobalEvents.subscribe('message', function (payload) {
      if (payload.error) {
        reportError(payload.error);
      }
    });
    return function () {
      subscription.unsubscribe();
    };
  }, []);
  return null;
});
export default (function (_ref2) {
  var maxMessages = _ref2.maxMessages,
      children = _ref2.children;
  var defaultProps = {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    maxSnack: maxMessages || 3
  };
  return React.createElement(StyledSnackBarProvider, defaultProps, React.createElement(React.Fragment, null, children, React.createElement(GlobalAlerts, null)));
});
var StyledSnackBarProvider = styled(SnackbarProvider).withConfig({
  displayName: "AlertsProvider__StyledSnackBarProvider",
  componentId: "h6wc3r-0"
})([".MuiTypography-root-52{border-radius:2px !important;}.SnackbarItem-message-14,.SnackbarItem-message-14 *{font-size:1rem !important;font-weight:300 !important;letter-spacing:0.04em;}"]);