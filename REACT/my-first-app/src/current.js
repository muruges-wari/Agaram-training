import React, { useEffect, useState } from 'react';

const LocationTracker = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Check if Geolocation is supported by the browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Update the state with the current location
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting geolocation:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <div>
      {location ? (
        <p>
          Your current location is: {location.latitude}, {location.longitude}
        </p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default LocationTracker;
