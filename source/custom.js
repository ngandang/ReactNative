import { Component } from "react";

import React from 'react';
import { StyleSheet, View, Image, ImageBackground, Button, Text, StatusBar, Alert, FlatList} from 'react-native';

export class CustomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        }
    }
    componentDidMount() {
        fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => {
            this.setState({data: json.movies})
        })
        .catch(error => console.log(error))
        .finally(() => {
            this.setState({isLoading: false});
        }

        )
    }
    render() {
        const {data, isLoading} = this.state;
        return (
            <View style={styles.container}>
                <ImageBackground  
                source={require('../assets/background.png')}
                style={styles.background}
                >

                <Text style={styles.title} >Hello Worl</Text>
                <Button 
                    title="Press me" 
                    onPress={() => Alert.alert('Hello, Ngan')}
                    // color="#002c5f"
                    style={styles.pressMe}
                >
                </Button>
                {/* <Image source={require('../assets/react-native.png')}></Image> */}
                <FlatList
                    data={data}
                    keyExtractor={({id}, index) => id}
                    renderItem={
                        ({item}) => (
                        <Text>{item.title}, {item.releaseYear}</Text>
                        )                        
                    }
                >

                </FlatList>
                <StatusBar style="auto" />
                </ImageBackground >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginVertical: 10,
      textAlign: "center",
      fontSize: 18
    },
    background: {
      resizeMode: "stretch",
      justifyContent: "center",
      flex: 1,
      // width: '100%',
      // height: '100%',
    },
    image: {
      height: 50,
      width: 50,
    },
    pressMe: {
      fontSize: 24,
      width: 50,
      height: 50,
      backgroundColor: '#002c5f',
    }
  });