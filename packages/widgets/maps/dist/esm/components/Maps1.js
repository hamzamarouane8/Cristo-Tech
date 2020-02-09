import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import { styled } from '@ctkit/theme';
import get from 'lodash.get';
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps";

var MapMarker = function MapMarker(_ref) {
  var position = _ref.position,
      onClick = _ref.onClick,
      open = _ref.open,
      children = _ref.children,
      closeInfo = _ref.closeInfo,
      icon = _ref.icon,
      options = _ref.options;
  return React.createElement(Marker, {
    position: position,
    onClick: onClick,
    icon: icon,
    options: options
  }, open && React.createElement(InfoWindow, {
    onCloseClick: closeInfo
  }, children));
};

var Map = withScriptjs(withGoogleMap(function (_ref2) {
  var defaultCenter = _ref2.defaultCenter,
      userMarker = _ref2.userMarker,
      defaultZoom = _ref2.defaultZoom,
      markers = _ref2.markers;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeMarker = _useState2[0],
      setActiveMarker = _useState2[1]; // TODO: Gérer le cas où Google maps n'est pas chargé ( Exmple: problème de connexion )


  var google = window.google;
  return React.createElement(GoogleMap, {
    onDragEnd: function onDragEnd() {
      return null;
    },
    defaultZoom: defaultZoom || 13,
    defaultCenter: defaultCenter,
    defaultOptions: {
      streetViewControl: true,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      }
    }
  }, userMarker && React.createElement(MapMarker, {
    key: userMarker.key || userMarker.id || "user",
    options: {
      icon: userMarker.icon
    },
    position: userMarker.position
  }), (markers || []).map(function (marker) {
    var isOpen = marker.id === get(activeMarker, 'id');
    return React.createElement(MapMarker, {
      key: marker.id,
      options: {
        icon: marker.icon
      },
      position: marker.position,
      onClick: function onClick() {
        return setActiveMarker(marker);
      },
      open: isOpen
    }, isOpen && marker.content());
  }));
}));
export default (function (_ref3) {
  var settings = _ref3.settings,
      defaultCenter = _ref3.defaultCenter,
      defaultZoom = _ref3.defaultZoom,
      markers = _ref3.markers,
      userMarker = _ref3.userMarker;
  var googleMapURL = "https://maps.googleapis.com/maps/api/js?key=".concat(settings.key, "&libraries=").concat(settings.librairies);
  return React.createElement("div", null, React.createElement(Map, {
    googleMapURL: googleMapURL,
    defaultCenter: defaultCenter,
    defaultZoom: defaultZoom,
    loadingElement: React.createElement("div", {
      style: {
        height: "100%"
      }
    }),
    containerElement: React.createElement("div", {
      style: {
        height: "100vh",
        width: "85%",
        zIndex: 1,
        position: 'fixed',
        top: '70px',
        right: 0,
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }),
    mapElement: React.createElement("div", {
      style: {
        height: "100%"
      }
    }),
    markers: markers,
    userMarker: userMarker
  }));
});
var Sidebar = styled.div.withConfig({
  displayName: "Maps1__Sidebar",
  componentId: "lagss7-0"
})(["position:absolute;padding:2em;left:0;top:70px;bottom:0;width:290px;"]);
var MapContainer = styled.div.withConfig({
  displayName: "Maps1__MapContainer",
  componentId: "lagss7-1"
})(["width:100%;height:100vh:position:fixed;top:70px;right:0;left:290px;box-shadow:rgba(0,0,0,0.06) 0px 0px 12px !important;bottom:0;z-index:10"]);