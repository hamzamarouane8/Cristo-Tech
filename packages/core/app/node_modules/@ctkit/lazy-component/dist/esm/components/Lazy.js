import React, { Suspense } from 'react';
import Spinner from '@ctkit/spinner';
import { Sizes } from '@ctkit/constants';
export default (function (_ref) {
  var children = _ref.children;
  return React.createElement(Suspense, {
    fallback: React.createElement("div", null, React.createElement(Spinner, {
      size: Sizes.SM
    }))
  }, children);
});
/*
const SpinnerStyled = styled.div`
  padding: 30px;
  text-align: center;
  display: block;
  width: 100%;
  * {
    margin: auto;
  }
`
*/