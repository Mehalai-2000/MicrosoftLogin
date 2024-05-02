import React, { Component, useState , useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


function MicrosoftSignIn(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '981687168567-geld8nper6r3tqh9rut8hgqbhd0a9baa.apps.googleusercontent.com',
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
      // Show alert for successful login
      props.navigation.navigate('FileUploadPage')
    } catch (error) {
      console.error('Error signing in with Google:', error);
      // Handle the error here (e.g., display an error message to the user)
      Alert.alert('Login Error', 'An error occurred while signing in with Google.');
    }
  }
  
  const onMicrosoftButtonPress = async () => {
    try {
      // Generate the provider object
      const provider = new auth.OAuthProvider('microsoft.com');
      // Optionally add scopes
      provider.addScope('offline_access');
      // Optionally add custom parameters
      provider.setCustomParameters({
        prompt: 'consent',
        tenant: 'd015e322-b468-4e3d-b6bb-3664ea76b948',
      });
      // Sign-in the user with the provider
      await auth().signInWithRedirect(provider);
      // Show alert for successful login
      props.navigation.navigate('FileUploadPage')
    } catch (error) {
      console.error('Error signing in with Microsoft:', error);
      // Handle the error here (e.g., display an error message to the user)
      Alert.alert('Login Error', 'An error occurred while signing in with Microsoft.');
    }
  };
const handleOnPress = () => {
  if(username == '' || null || undefined && password == '' || null || undefined){
    Alert.alert('Username and Password Required')
  }
  else{
    console.log('Username:', username);
    console.log('Password:', password);
    props.navigation.navigate('FileUploadPage')
    setUsername('');
    setPassword('');
  }
}
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../src/Images/6017051.png')} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          placeholderTextColor={'black'}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          placeholderTextColor={'black'}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button}  onPress={handleOnPress}>
          <Text style={styles.buttonText} onPress={() => console.log('Sign In', username, password)}>SignIn</Text>
        </TouchableOpacity>
        <View style={styles.rowcontainer}>
          <TouchableOpacity style={styles.box} onPress={onGoogleButtonPress}>
            <View style={styles.row}>
              <Image source={require('../src/Images/Google__G__logo.svg.png')} style={styles.googlelogo} />
              <Text style={styles.googlelogotext}>Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={onMicrosoftButtonPress}>
            <View style={styles.row}>
              <Image source={require('../src/Images/Mocrosoft.jpg')} style={styles.googlelogo} />
              <Text style={styles.googlelogotext}>Microsoft</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#3fa1bc',
    padding: 16,
    marginBottom: 30,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container : {
     flex: 1, 
     justifyContent: 'center',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    color : 'black'
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#3fa1bc',
    marginBottom: 16,
    paddingLeft: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  rowcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: '48%',
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#3fa1bc',
    borderRadius: 8,
  },
  googlelogo: {
    width: 25,
    height: 25,
    marginTop: 7,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
  },
  googlelogotext: {
    alignSelf: 'center',
    marginLeft: 20,
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  }
})

export default MicrosoftSignIn;
