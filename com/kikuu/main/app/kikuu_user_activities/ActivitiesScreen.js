import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
class ActivitiesScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Activity screen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapActionToProps = {};
export default connect(null, null)(ActivitiesScreen);
