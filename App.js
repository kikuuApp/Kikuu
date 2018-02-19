import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, alignSelf:'stretch'}}>
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

export default connect(null,null)(App);