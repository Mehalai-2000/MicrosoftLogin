// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MicrosoftSignIn from './auth-config';
import FileUploadPage from './DetailsScreen';
import SplashScreens from './NewPage';
import LineChartDesign from './chart/LineChart';
import NewchartBot from './chartBot/NewchartBot';
import ChartApp from './chartBot/chartBot';
import NewBot from './chartBot/NewchartBot';
import Geolocation from './geolocation/Geolocation';
import AddressGeocoderMap from './geolocation/locationHightlighter';
import FlatListExample from './ScrollView';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">  
        {/* <Stack.Screen name="AddressGeocoderMap" component={AddressGeocoderMap} />  */}
        <Stack.Screen name="FlatListExample" component={FlatListExample} />
        <Stack.Screen name="Geolocation" component={Geolocation} />
        <Stack.Screen name="SplashScreens" component={SplashScreens} options={{ headerShown: false }} />
        <Stack.Screen name="MicrosoftSignIn" component={MicrosoftSignIn} />
        <Stack.Screen name="FileUploadPage" component={FileUploadPage} />
        {/* <Stack.Screen name="NewBot" component={NewBot} /> */}
        <Stack.Screen name="ChartApp" component={ChartApp} />
        {/* <Stack.Screen name="LineChartDesign" component={LineChartDesign} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;