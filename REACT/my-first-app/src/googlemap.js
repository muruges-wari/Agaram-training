// src/components/GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import LocationTracker from './current'

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCsoBIr2MGcSl2vpUCxjlJ30yfiVylEh5E">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        {/* You can add markers or other components here */}
      </GoogleMap>
      <LocationTracker/>
    </LoadScript>
  );
};

export default GoogleMaps;
