import React from 'react';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';
export default (function (_ref) {
  var children = _ref.children;
  return React.createElement(StyledSegment, null, children);
});
var StyledSegment = styled(Segment).withConfig({
  displayName: "Pane__StyledSegment",
  componentId: "sc-1c3dy65-0"
})(["&.ui.segment{border-radius:2px;border:1px solid rgba(67,90,111,0.12);box-shadow:none;}"]); // box-shadow: 0 0 1px rgba(67, 90, 111, 0.3), 0 2px 4px -2px rgba(67, 90, 111, 0.47);