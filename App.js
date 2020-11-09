import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("App react native");
  
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Hello World</Text>
      <Button 
        title="Press me" 
        onPress={() => Alert.alert('Hello, Ngan')}
        color="#002c5f"
      >

      </Button>
      <StatusBar style="auto" />
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
  }
});
