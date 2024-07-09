import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';



const AddressGeocoderMap = () => {




  return (
    <View style={styles.container}>
     
      {fromLocation && (
        <Text style={styles.locationText}>
          From Location: Latitude: {fromLocation.lat}, Longitude: {fromLocation.lon}
        </Text>
      )}
      
      {toLocation && (
        <Text style={styles.locationText}>
          To Location: Latitude: {toLocation.lat}, Longitude: {toLocation.lon}
        </Text>
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}

      <MapView
        style={styles.map}
        region={{
          latitude: (fromLocation?.lat || toLocation?.lat || 37.78825),
          longitude: (fromLocation?.lon || toLocation?.lon || -122.4324),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
       
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  locationText: {
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
  map: {
    flex : 1,
  },
});

export default AddressGeocoderMap;