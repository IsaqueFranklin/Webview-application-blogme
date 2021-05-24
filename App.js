import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview'

export default function App() {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'http://blogme.com.br/'}} style={{ width: '100%', marginTop: '50px'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
