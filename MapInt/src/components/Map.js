import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Replace with your Google Maps API Key
const MAP_API_KEY = '';

// Default location to center the map (can be your campus center point)
const defaultCenter = {
  lat: 13.729240175916983 , // Replace with your latitude
  lng: 100.77551569295957   // Replace with your longitude
};

const Map = () => {
  const [map, setMap] = useState(null);

  // Handles when the map is loaded
  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  useEffect(() => {
    if (map) {
      // Example: Set initial zoom level
      map.setZoom(16);
    }
  }, [map]);

  return (
    <LoadScript googleMapsApiKey={MAP_API_KEY}>
      <GoogleMap
        id="map"
        mapContainerStyle={{ height: '100vh', width: '100%' }}
        center={defaultCenter}
        zoom={16}
        onLoad={onLoad}
      >
        {/* Add markers for trash cans, this is just an example */}
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
