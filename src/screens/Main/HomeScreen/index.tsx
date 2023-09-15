import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
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
    borderWidth:2
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
