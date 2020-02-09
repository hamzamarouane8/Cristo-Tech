import React, {useState} from 'react'
import {styled} from '@ctkit/theme'
import get from 'lodash.get'
import {withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker} from "react-google-maps"

const MapMarker = ({position, onClick, open, children, closeInfo, icon, options}) => (
  <Marker position={position} onClick={onClick} icon={icon} options={options}>
    {open && (
      <InfoWindow onCloseClick={closeInfo}>
        {children}
      </InfoWindow>
    )}
  </Marker>
)

const Map = withScriptjs(withGoogleMap(({defaultCenter, userMarker, defaultZoom, markers}) => {

  const [activeMarker, setActiveMarker] = useState(null)

  // TODO: Gérer le cas où Google maps n'est pas chargé ( Exmple: problème de connexion )
  const google = window.google;
  return (
    <GoogleMap
      onDragEnd={() => null}
      defaultZoom={defaultZoom || 13}
      defaultCenter={defaultCenter}
      defaultOptions={{
        streetViewControl: true,
        mapTypeControl: false,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT
        },
      }}>

      {userMarker && (
        <MapMarker
          key={userMarker.key || userMarker.id || "user"}
          options={{icon: userMarker.icon}}
          position={userMarker.position}
        />
      )}

      {(markers || []).map((marker) => {
        const isOpen = marker.id === get(activeMarker, 'id')
        return (
          <MapMarker key={marker.id}
                     options={{icon: marker.icon}}
                     position={marker.position}
                     onClick={() => setActiveMarker(marker)} open={isOpen}>
            {isOpen && marker.content()}
          </MapMarker>
        )
      })}

    </GoogleMap>
  )
}))

export default (({settings, defaultCenter, defaultZoom, markers, userMarker}) => {

  const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${settings.key}&libraries=${settings.librairies}`
  return (
    <div>

      <Map googleMapURL={googleMapURL}
           defaultCenter={defaultCenter}
           defaultZoom={defaultZoom}
           loadingElement={<div style={{height: `100%`}}/>}
           containerElement={<div style={{height: `100vh`, width:`85%`,zIndex:1,position: 'fixed' ,top: '70px' ,right: 0,left: '50%',
             transform: 'translateX(-50%)'}}/>}
           mapElement={<div style={{height: `100%`}}/>}
           markers={markers}
           userMarker={userMarker}
      />
    </div>
  )
})

const Sidebar = styled.div`
  position: absolute;
  padding: 2em;
  left: 0;
  top: 70px;
  bottom: 0;
  width: 290px;
`

const MapContainer = styled.div`
  width: 100%;
  height: 100vh:
  position: fixed;
  top: 70px;
  right: 0;
  left: 290px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 12px !important;
  bottom: 0;
  z-index: 10
`
