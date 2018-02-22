import React, { Component } from "react";
import Styles from "../../../../resources/static/styles/KikuuStyles";

import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";

import { connect } from "react-redux";

class GenericScreen extends Component {
  render() {
    const { model } = this.props;
    return <SafeAreaView style={Styles.main_con}>{model}</SafeAreaView>;
  }
}

export default connect(null, null)(GenericScreen);
