import React from 'react';
import { Sizes } from '@ctkit/constants';
import styled from 'styled-components';
import classnames from 'classnames';
export default (function (props) {
  var size = Sizes.fromProps(props);
  return React.createElement(Root, {
    className: classnames('clearfix', size)
  });
});
var Root = styled.div.withConfig({
  displayName: "Spacing__Root",
  componentId: "sc-14vfajz-0"
})(["margin-top:10px;margin-bottom:10px;"]);