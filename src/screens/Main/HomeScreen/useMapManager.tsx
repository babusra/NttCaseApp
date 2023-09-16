import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useMapManager = () => {
  const apiKey = 'AIzaSyBD-9MMCJOejcC86zBPtt3ahbIyGkfhG08';
  const [placeId, setPlaceId] = useState('ChIJU4-x7AW2yhQRzhv5ydjvaXs');

  const [marker, setMarker] = useState<any>({
    latitude: 41.00032,
    longitude: 29.09917,
  });

  const [initialRegion, setInitialRegion] = useState({
    latitude: 41.00032,
    longitude: 29.09917,
    latitudeDelta: 0.07,
    longitudeDelta: 0.07,
  });

  const [formattedAddress, setFormattedAddress] = useState('');
  const [visible, setVisible] = useState(false);
  const mapViewRef = React.useRef<any>(null);
  const moveMap = () => {
    mapViewRef?.current.animateToRegion({
      ...marker,
      latitudeDelta: 0.07,
      longitudeDelta: 0.07,
    });
  };
  const key = 'coordinate';

  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${marker.latitude},${marker.longitude}&radius=1500&key=${apiKey}`,
      )
      .then(res => setPlaceId(res.data.results[0].place_id))
      .then(() =>
        axios
          .get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`,
          )
          .then(response => {
            setFormattedAddress(response.data.result.formatted_address);
          })
          .catch(error => {
            console.error(error);
          }),
      );
    AsyncStorage.setItem(key, JSON.stringify(marker));

    moveMap();
  }, [marker]);

  return {
    mapViewRef,
    initialRegion,
    visible,
    setVisible,
    moveMap,
    setMarker,
    apiKey,
    formattedAddress,
    key,
    marker,
  };
};

export default useMapManager;
