import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView,{ Marker } from 'react-native-maps';

const myHouse = {
  latitude: 5.072358139108379,
  longitude: -75.49975552978903,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const university = {
  latitude: 5.067754748769989,
  longitude: -75.5031112904149,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export const Maps = () => {

  return (
    <View>
      <MapView 
        style={ styles.maps }
        initialRegion={{
          latitude: 5.067754748769989,
          longitude: -75.5031112904149,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker 
          coordinate={ university }
          title="My university"
          description="This is my university autonoma de manizales"
        />
        <Marker
          coordinate={ myHouse }
          title="My house"
          description="This is my house"
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  maps: {
    width: '100%',
    height: '100%',
  },
});
