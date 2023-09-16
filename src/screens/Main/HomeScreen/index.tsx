import {View, Text, StyleSheet} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import BottomModal from '../../../components/BottomModal';
import {moderateScale} from '../../../utils/Dimension';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import useMapManager from './useMapManager';
import Location from '../../../contents/Location';

const HomeScreen: FC = () => {
  const {
    mapViewRef,
    moveMap,
    initialRegion,
    visible,
    setVisible,
    setMarker,
    apiKey,
    marker,
    formattedAddress,
    setFormattedAddress,
  } = useMapManager();
  return (
    <View style={styles.container}>
      <View
        style={{
          borderWidth: 2,
          paddingTop: 30,
          height: moderateScale(280),
        }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details) => {
            console.log(data, details);
            setFormattedAddress(data.description);
            setMarker({
              latitude: details?.geometry.location.lat,
              longitude: details?.geometry.location.lng,
            });
          }}
          fetchDetails={true}
          query={{
            key: apiKey,
            language: 'tr',
          }}
          styles={{
            container: {flex: 0},
            textInput: styles.textInput,
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
            listView: {marginHorizontal: moderateScale(20)},
          }}
        />
      </View>
      <MapView
        ref={mapViewRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        onMarkerPress={() => setVisible(!visible)}
        onMapReady={() => moveMap()}>
        <Marker
          draggable
          coordinate={marker}
          onDragEnd={e => {
            setMarker(e.nativeEvent.coordinate);
            setVisible(!visible);
          }}
        />
      </MapView>

      <BottomModal
        visible={visible}
        toggleBottomNavigationView={() => setVisible(!visible)}
        content={<Location formattedAddress={formattedAddress} />}
      />
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details) => {
          console.log(data, details);
          setFormattedAddress(data.description);
          setMarker({
            latitude: details?.geometry.location.lat,
            longitude: details?.geometry.location.lng,
          });
        }}
        fetchDetails={true}
        query={{
          key: apiKey,
          language: 'tr',
        }}
        styles={{
          container: {flex: 1,width:'100%', position: 'absolute', top: 0},
          textInput: styles.textInput,
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          listView: {marginHorizontal: moderateScale(20)},
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textInput: {
    height: 50,
    color: '#5d5d5d',
    fontSize: 16,
    marginTop: moderateScale(40),
    marginHorizontal: moderateScale(20),
  },
});
