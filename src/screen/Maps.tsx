import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export const Maps = () => {

  return (
    <View>
      <MapView 
        style={ styles.maps }
        initialRegion={{
          latitude: 5.06889,
          longitude: -75.51738,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  maps: {
    width: '100%',
    height: '100%',
  },
});
