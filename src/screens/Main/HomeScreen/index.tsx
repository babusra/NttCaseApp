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
    initialRegion,
    visible,
    setVisible,
    moveMap,
    setMarker,
    apiKey,
    marker,
    formattedAddress,
  } = useMapManager();
  return (
    <View style={styles.container}>
      <MapView
        ref={mapViewRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        onMarkerPress={() => setVisible(!visible)}
        onMapReady={() => moveMap()}>


        <View style={{paddingTop: 30, height: moderateScale(280)}}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details) => {
              console.log(data, details);
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
              textInput:styles.textInput,
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
              listView: {marginHorizontal: moderateScale(20)},
            }}
          />
        </View>
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
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
  }
});
