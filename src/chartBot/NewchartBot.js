import * as React from 'react';
import { Text, View, Button, Platform } from 'react-native';
import {
  initialize,
  showMessaging,
} from '@robbywh/react-native-zendesk-messaging';
const NewBot = () => {
  React.useEffect(() => {
    initialize(
      'eyJzZXR0aW5nc191cmwiOiJodHRwczovL3pvaTE1NTIuemVuZGVzay5jb20vbW9iaWxlX3Nka19hcGkvc2V0dGluZ3MvMDFIV1g3UE1UN0RIM0pLRVNGQlA3WDAyUVEuanNvbiJ9'
    );
  }, []);
  return (
    <View style={{ padding: 100 }}>
      <Text
        style={{
          marginBottom: 50,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
        }}
      >
        Zendesk Messaging
      </Text>
      <Text style={{ marginBottom: 10, textAlign: 'center' }}>
        Press The "CHAT" button to test
      </Text>
      <Button onPress={() => showMessaging()} title="CHAT" />
    </View>
  );
};
export default NewBot;