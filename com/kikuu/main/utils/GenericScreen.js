import React, { Component } from "react";
import Styles from "../../../../resources/static/styles/KikuuStyles";

import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView,
  Platform,
  ImageBackground,
  Image
} from "react-native";

import { connect } from "react-redux";

const backImage = require("../../../../resources/static/images/back.png");
const appicon = require("../../../../resources/static/images/appIcon.png");

class GenericScreen extends Component {
  render() {
    const { model } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, alignSelf: "stretch" }}>
        <ImageBackground source={backImage} style={Styles.main_con}>
          <Image
            source={appicon}
            style={{ width: 60, height: 50, top:60, flexDirection: "row-reverse" }}
          />
          <View style={{flex:1, alignSelf:'stretch',justifyContent:'center',padding:50}}>
          {model}
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default connect(null, null)(GenericScreen);
