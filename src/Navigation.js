// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MicrosoftSignIn from './auth-config';
import FileUploadPage from './DetailsScreen';
import SplashScreens from './NewPage';
import LineChartDesign from './chart/LineChart';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
      <Stack.Screen name="LineChartDesign" component={LineChartDesign}  />
      {/* <Stack.Screen name="SplashScreens" component={SplashScreens} options={{headerShown : false}} /> */}
        <Stack.Screen name="MicrosoftSignIn" component={MicrosoftSignIn} />
        <Stack.Screen name="FileUploadPage" component={FileUploadPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;