import { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function GoogleIntegration() {
  let center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC9swLScGCN8EwlfJFtD0ILzVCGj9uqgOA",
  });
  let handleMapClick = () => {
    console.log("handleMapClick function clicked");
  };
  return (
    <div style={{ height: "300px", width: "100vw", margin: "auto" }}>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          // style={{ width: "200px", height: "400px" }}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={10}
          onClick={handleMapClick}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
        </GoogleMap>
      )}
    </div>
  );
}

export default GoogleIntegration;
