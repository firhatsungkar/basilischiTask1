/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class basilischiTask1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.logo} source={require('./img/refactory--logo.png')} />
          <Image style={styles.photo} source={require('./img/me--photo.jpeg')} />
          <Text style={styles.name}>Muhamad Firhat</Text>
          <Text style={styles.class}>#basilischi</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    width: '60%',
    maxHeight: '50%',
    backgroundColor: '#e4e4e4',
    borderRadius: 10,
    elevation: 10,
  },
  logo: {
    marginTop: 10,
    width: 108.75,
    height: 45.5,
  },
  photo: {
    marginTop: 60,
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  name: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    borderBottomColor: '#333333',
    borderBottomWidth: 3,
  },
  class: {
    fontSize: 15,
  }
});

AppRegistry.registerComponent('basilischiTask1', () => basilischiTask1);
