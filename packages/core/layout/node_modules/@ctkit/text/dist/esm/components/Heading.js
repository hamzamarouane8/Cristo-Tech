import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { Sizes } from '@ctkit/constants';
export default (function (_ref) {
  var children = _ref.children,
      text = _ref.text,
      style = _ref.style,
      caption = _ref.caption,
      props = _objectWithoutProperties(_ref, ["children", "text", "style", "caption"]);

  var hz = Sizes.fromProps(props);
  return React.createElement(Styled, {
    className: classnames('clearfix', hz),
    style: {
      style: style
    }
  }, React.createElement("h2", null, text || children), caption && React.createElement("div", {
    className: "rk rk-caption"
  }, caption));
});
var Styled = styled.div.withConfig({
  displayName: "Heading__Styled",
  componentId: "sc-1yfyln6-0"
})(["&.xxlarge{font-size:2.1rem;}&.xlarge{font-size:1.7rem;}&.large{font-size:1.5rem;}&.hero{margin-top:60px;.h2,h2,.h3,h3{font-weight:600 !important;letter-spacing:-1px;line-height:1.2 !important;}.h2,h2{font-size:3.8em;}.h3,h3{font-size:3.8em;}}h2{font-size:1em;margin:0 !important;line-height:1.4;font-weight:500;}.rk-caption{font-size:0.75em;}margin-bottom:15px;"]);