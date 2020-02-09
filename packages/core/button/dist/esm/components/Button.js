import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
export default (function (_ref) {
  var type = _ref.type,
      size = _ref.size,
      minimal = _ref.minimal,
      loading = _ref.loading,
      primary = _ref.primary,
      secondary = _ref.secondary,
      className = _ref.className,
      active = _ref.active,
      disabled = _ref.disabled,
      icon = _ref.icon,
      appearance = _ref.appearance,
      fill = _ref.fill,
      children = _ref.children,
      text = _ref.text,
      compact = _ref.compact,
      onClick = _ref.onClick,
      styled = _ref.styled;
  return React.createElement(ButtonStyled, {
    size: size,
    active: active,
    className: className,
    primary: primary || appearance === 'primary',
    secondary: secondary || appearance === 'secondary',
    fluid: fill,
    loading: loading,
    compact: compact,
    onClick: onClick,
    type: type,
    disabled: disabled,
    style: styled
  }, icon, text || children || '');
});
var ButtonStyled = styled(Button).withConfig({
  displayName: "Button__ButtonStyled",
  componentId: "bbfu1m-0"
})(["border-radius:2px !important;font-weight:500;letter-spacing:0.05em;&.compact{font-size:0.9em !important;}&.ui.button{line-height:1.4em;font-weight:400;}&.ui.primary.button{background:#3f51b5;&:hover,&:active{background:#333854 !important;}}&.ui.button.large{font-size:1.1em !important;line-height:1.8em !important;height:auto !important;max-height:auto !important;}"]);