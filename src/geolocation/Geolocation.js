import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button, ActivityIndicator, Text } from 'react-native';
import MapView, { AnimatedRegion, Marker, Polyline } from 'react-native-maps';
import polyline from '@mapbox/polyline';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

const MapComponent = () => {
  const [response, setResponse] = useState([]);
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [locationRegion, setLocationRegion] = useState('')
  const [currentLoacation , setCurrentLocation] = useState({
    latitude : 0,
    longitude : 0
  })

  const region = useRef(new AnimatedRegion({
    latitude: fromLocation?.lat ? fromLocation.lat : 8.372926,
    longitude: fromLocation?.lon ? fromLocation.lon : 77.603422,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })).current;
  const mapRef = React.createRef();

  const apiKey = 'prj_live_pk_536ce739adfcbacefff409d5766d6cb5c2c95c1d'; // Replace with your Radar API key

  const fetchRoute = async (fromLocation, toLocation) => {
    const locations = `${fromLocation.lat},${fromLocation.lon}|${toLocation.lat},${toLocation.lon}`;
    console.log(locations,"locations")
    const mode = 'car';
    const units = 'imperial';

    const baseUrl = 'https://api.radar.io/v1/route/directions';
    const params = { locations, mode, units };
    const url = `${baseUrl}?${new URLSearchParams(params)}`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: apiKey,
        },
      });
      const data = await response.json();
      setResponse(data.routes[0].legs[0].geometry.polyline);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getLatLngFromAddress = async (address) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&addressdetails=1`;

    try {
      const response = await axios.get(url);
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { lat: parseFloat(lat), lon: parseFloat(lon) };
      } else {
        throw new Error('Unable to geocode address');
      }
    } catch (error) {
      console.error(error , 'errors!');
      return null;
    }
  };

  const handleFetchDirections = async () => {
    setLoading(true); // Start loading
    const fromLocation = await getLatLngFromAddress(fromAddress);
    const toLocation = await getLatLngFromAddress(toAddress);

    if (fromLocation && toLocation) {
      setFromLocation(fromLocation);
      setToLocation(toLocation);
      setError('');
      await fetchRoute(fromLocation, toLocation);
    } else {
      setError('Failed to fetch geocode for the addresses');
    }
    setLoading(false); // End loading
  };

  useEffect(() => {
    if (fromLocation) {
      region.timing({
        latitude: fromLocation.lat,
        longitude: fromLocation.lon,
        duration: 1000, // Animation duration
      }).start();
    }
    // Geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log(position,"position")
    //     const {latitude , longitude} = position.coords;
    //     setCurrentLocation({ latitude, longitude});
    //   },
    //   (error) => {
    //     console.log(error , 'error2')
    //   },
    //   {enableHighAccuracy : true , timeout: 1500 , maximumAge: 1000}
    // )
    Geolocation.getCurrentPosition(info => console.log(info,"information"));
  }, [fromLocation]);
  const decodedPolyline = polyline.decode(response);
  const coordinates = decodedPolyline.map(([latitude, longitude]) => ({
    latitude: latitude / 10,
    longitude: longitude / 10,
  }));
  const onRegionChange = (region) => {
    setLocationRegion(region)
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="From Address"
        value={fromAddress}
        onChangeText={setFromAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="To Address"
        value={toAddress}
        onChangeText={setToAddress}
      />
      <Button title="Get Directions" onPress={handleFetchDirections} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <MapView.Animated
        ref={mapRef}
        style={styles.map}
        region={region}
        onRegionChange={onRegionChange}
      >
        <Marker
          coordinate={{
            latitude: 8.3768343,
            longitude: 77.6142866,
          }}
          title="current Location"
        /> 
        {fromLocation && (
          <Marker
            coordinate={{
              latitude: fromLocation.lat,
              longitude: fromLocation.lon,
            }}
            title="From Location"
          />
        )}
        {toLocation && (
          <Marker
            coordinate={{
              latitude: toLocation.lat,
              longitude: toLocation.lon,
            }}
            title="To Location"
          />
        )}
        <Polyline coordinates={coordinates} strokeColor="green" strokeWidth={3} />
      </MapView.Animated>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});

export default MapComponent;