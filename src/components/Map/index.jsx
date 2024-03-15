import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GeoCoderMarker from '../GeoCoderMarker';

const Map = ({ center, name, address, city, country, image }) => {
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
        <Popup>
          <Box marginBottom={1}>
            <Typography fontWeight={"bold"}>
              {name}
            </Typography>
            <img src={image} height={80} width={150} style={{ borderRadius: "8px" }} />
          </Box>
          <Link href={`https://www.google.com/maps/search/?api=1&query=${center[0]},${center[1]}`} target="_blank" variant="body2">
            Open in Google Maps
          </Link>

        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map;