import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

/** 
 * Contact Tab screen
*/
class ContactsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>contact screen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapActionToProps = {};
export default connect(null, null)(ContactsScreen);
