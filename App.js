/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import MicrosoftLogin from './src/auth-config';
import Navigation from './src/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  useEffect(() => {
    // Remove this method to stop OneSignal Debugging
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);       

    // OneSignal Initialization
    OneSignal.initialize("6e002422-aa1c-41e1-a179-482c157b99a9");

    // requestPermission will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
    OneSignal.Notifications.requestPermission(true);

    // Method for listening for notification clicks
    OneSignal.Notifications.addEventListener('click', (event) => {
      console.log('OneSignal: notification clicked:', event);
    });
  })

  return (
    <Navigation/>
    // <View>
    //   <Text>Hi Mani , How Are you Welcome to this Page </Text>
    // </View>
  );
}

const styles = StyleSheet.create({

});

export default App;
