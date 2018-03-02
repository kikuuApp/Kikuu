import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';
import LoginScreen from './com/kikuu/main/app/kikuu_login/LoginScreen';
import SystemNavigatorScreen from './com/kikuu/main/app/kikuu_system/SystemNavigatorScreen';

class App extends Component {
  render() {
    return (
      <LoginScreen/>
    );
  }
}

export default connect(null,null)(App);