
import Box from "@mui/material/Box"
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";


const locations = [
  {
    id: 1,
    city: "Delhi",
    lat: 28.61,
    long: 77.23,
  },
  {
    id: 2,
    city: "Mumbai",
    lat: 19.0761,
    long: 72.8775,
  },
  {
    id: 3,
    city: "Bangalore",
    lat: 12.9789,
    long: 77.5917,
  },
  {
    id: 4,
    city: "Pune",
    lat: 18.5203,
    long: 73.8567,
  },
];

function OurLocations() {
  //   const { isLoaded } = useLoadScript({
  //     googleMapsApiKey: "AIzaSyC9swLScGCN8EwlfJFtD0ILzVCGj9uqgOA",
  //   });

  const mapStyles = {
    height: "400px",
    width: "60%",
    margin: "auto",
  };

  const handleMapClick = () => { };

  const defaultCenter = {
    lat: locations.length > 0 ? locations[0].lat : 0,
    lng: locations.length > 0 ? locations[0].long : 0,
  };

  return (
    <Box marginBottom={10}>
      <LoadScript googleMapsApiKey="AIzaSyC9swLScGCN8EwlfJFtD0ILzVCGj9uqgOA">
        <GoogleMap mapContainerStyle={mapStyles} zoom={4} center={defaultCenter}>
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={{ lat: location.lat, lng: location.long }}
              title={location.city}
              onClick={handleMapClick}
              yesIWantToUseGoogleMapApiInternals
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </Box>
  );
}

export default OurLocations;
