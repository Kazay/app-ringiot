import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text ,View} from 'react-native';
//import Login Component 
import Login from './components/Login/Login';

export default class ringiot extends Component {
  render() {
    return (
     <Login />
    );
  }
}

AppRegistry.registerComponent('ringiot', () => ringiot);