import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'; // import 'semantic-ui-css/components/loader.css'
// import 'semantic-ui-css/components/segment.css'
// import 'semantic-ui-css/components/dimmer.css'

export default (function (_ref) {
  var text = _ref.text,
      children = _ref.children,
      loading = _ref.loading;
  return React.createElement(Segment, {
    basic: true,
    style: {
      padding: 0,
      margin: 0
    }
  }, React.createElement(Dimmer, {
    inverted: true,
    active: loading
  }, React.createElement(Loader, null, React.createElement("small", null, text || 'Chargement des données en cours...'))), children);
});