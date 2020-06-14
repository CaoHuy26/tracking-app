import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

// 21.0245, 105.84117: Hanoi
const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

const Maps = () => {
  const [currentPosition, setCurrentPosition] = useState(initialState);

  useEffect(() => {
    navigator.geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({
          ...currentPosition,
          latitude,
          longitude
        })
      },
      error => alert(error.message),
      { 
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  }, []);

  return currentPosition.latitude ? (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      region={currentPosition}
    ></MapView>
  ) : (
    <ActivityIndicator style={{ flex: 1 }} animating size="large" />
  );
};

export default Maps;