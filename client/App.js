import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './screens/navbar'
import {StackNavigator, NavigationActions} from 'react-navigation'
export default class App extends React.Component {
  render() {
    return (
      <Navbar/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
