import React from 'react';
import styled from 'styled-components';
export default (function (_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      value = _ref.value;
  var Icon = icon;
  return React.createElement(StyledContent, null, Icon && React.createElement("div", {
    className: "rui rui-chart-icon"
  }, React.createElement(Icon, {
    mini: true
  })), React.createElement("div", {
    className: "rui-chart-value"
  }, value), React.createElement("div", {
    className: "rui-chart-title"
  }, title));
});
var StyledContent = styled.div.withConfig({
  displayName: "ValueChart__StyledContent",
  componentId: "sc-139lt43-0"
})(["padding-top:20px;padding-bottom:20px;text-align:center;.rui-chart-icon{text-align:center;background:#E6F3FE;color:#0484FF;margin:auto;width:32px;height:32px;border-radius:32px;padding-top:5px}.rui-chart-value{font-weight:500;font-size:3em;color:#111;}.rui-chart-title{color:#555;}"]);