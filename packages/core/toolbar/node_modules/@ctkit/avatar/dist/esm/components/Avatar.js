import React from 'react';
import { Image } from 'semantic-ui-react'; //import 'semantic-ui-css/components/image.css'

export default (function (_ref) {
  var src = _ref.src,
      size = _ref.size;
  return React.createElement(Image, {
    src: src,
    size: size || 'tiny',
    avatar: true,
    verticalAlign: "middle"
  });
});