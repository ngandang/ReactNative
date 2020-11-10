import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { CustomComponent } from './source/custom';

export default function App() {
  console.log("App react native");
    return (
      <View style={styles.container}>
        <CustomComponent></CustomComponent>

      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

