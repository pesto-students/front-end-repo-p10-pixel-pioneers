import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import GeoCoderMarker from '../GeoCoderMarker';

const Map = ({ center, address, city, country }) => {
  return (
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "40vh",
          width: "100%",
          zIndex: 0,
        }}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <GeoCoderMarker address={`${address} ${city} ${country}`} />
        <Marker position={center}>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Marker>
      </MapContainer>
  )
}

export default Map;