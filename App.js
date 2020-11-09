import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  console.log("App react native");
  
  return (
    <View style={styles.container}>
      <ImageBackground  
        source={require('./assets/background.png')}
        style={styles.background}
      >

        <Text style={styles.title} >Hello World</Text>
        <Button 
          title="Press me" 
          onPress={() => Alert.alert('Hello, Ngan')}
          // color="#002c5f"
          style={styles.pressMe}
        >

        </Button>
        <StatusBar style="auto" />
      </ImageBackground >

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
  title: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 18
  },
  background: {
    resizeMode: "cover",
    justifyContent: "center",
    flex: 1,
    width: '100%',
    height: '100%',
  },
  pressMe: {
    fontSize: 24,
    width: 100,
    height: 50,
    backgroundColor: '#002c5f',
  }
});
