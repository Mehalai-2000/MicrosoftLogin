/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from "lottie-react-native";

function SplashScreen(props) {
  const onAnimationFinish = () => {
   props.navigation.replace('MicrosoftSignIn')
  };
  return (
   <View>
     <LottieView
      source={require("./Images/NewSplachScreen.json")}
      style={{width: "100%", height: "100%"}}
      autoPlay
      loop = {false}
      onAnimationFinish={onAnimationFinish}
    />
   </View>
  );
}

const styles = StyleSheet.create({

});

export default SplashScreen;
