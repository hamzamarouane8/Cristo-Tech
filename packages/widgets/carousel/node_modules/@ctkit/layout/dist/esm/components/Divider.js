import React from 'react';
import { Divider } from "semantic-ui-react";
import { styled } from '@ctkit/theme';
export default (function (_ref) {
  var fitted = _ref.fitted;
  return React.createElement("div", {
    className: "clearfix"
  }, React.createElement(Root, {
    fitted: fitted
  }));
});
var Root = styled(Divider).withConfig({
  displayName: "Divider__Root",
  componentId: "sc-1m0xym-0"
})(["margin:50px auto;border-radius:10px;width:80px;height:6px;"]);