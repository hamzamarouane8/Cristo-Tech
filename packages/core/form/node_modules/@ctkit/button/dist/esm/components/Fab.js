import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
export default (function (_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      onClick = _ref.onClick;
  return React.createElement(Styled, null, React.createElement(Fab, {
    onClick: onClick,
    color: 'primary'
  }, children || icon));
});
var Styled = styled.div.withConfig({
  displayName: "Fab__Styled",
  componentId: "sc-1edmtz5-0"
})(["position:fixed;right:180px;top:71px;z-index:100;.ui.massive.circular.button{background:#00B5CD;color:#FFF;height:3em;width:3em;line-height:1.1em;}.ui.button{box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);}"]);