import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Box } from "@mui/material"

function MultipleMarkers() {
  const locations = [
    // {
    //     id: 1,
    //     city: "Delhi",
    //     lat: 28.7041,
    //     long: 77.1025,
    // },
    {
      id: 2,
      city: "Mumbai",
      lat: 19.076,
      long: 72.8777,
    },
    {
      id: 3,
      city: "Bangalore",
      lat: 12.9716,
      long: 77.5946,
    },
    {
      id: 4,
      city: "Pune",
      lat: 18.5204,
      long: 73.8567,
    },
    {
      id: 5,
      city: "Noida",
      lat: 28.5355,
      long: 77.391,
    },
    {
      id: 6,
      city: "Hyderabad",
      lat: 17.4065,
      long: 78.4772,
    },
  ];

  return locations.map((location, locationIndex) => {
    return (
      <Marker
        key={`location-${locationIndex}`}
        position={[location.lat, location.long]}
      >
        <Popup>{location.city}</Popup>
      </Marker>
    );
  });
}

const IndianMap = () => {
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={4}
      scrollWheelZoom={true}
      style={{
        height: "60vh",
        width: "80vw",
        maxHeight: "600px",
        maxWidth: "900px",
        borderRadius: "10px",
        border: "5px solid #C9D7DD",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MultipleMarkers />
    </MapContainer>
  );
};

export default IndianMap;
