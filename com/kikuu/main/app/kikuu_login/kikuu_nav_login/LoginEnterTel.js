import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { Button } from "react-native-elements";
import Styles from "../../../../../../resources/static/styles/KikuuStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import GenericLoginScreen from "../../../utils/GenericLoginScreen";

/**
 * Telephone registration view
 * @class
 */
class LoginEnterTel extends Component {
  static navigationOptions =({navigation})=>({
    header:false,
  });
  render() {
    const { lang } = this.props;

    return (
      <GenericLoginScreen
        model={
          <KeyboardAvoidingView style={Styles.reg_input_con}>
          {/** Text field for instructions*/}
          {/* <Text style={Styles.reg_instruction}>{lang.reg_instruction}</Text> */}
  
          {/**Error message*/}
          {/* <Text style={Styles.reg_instruction}>{lang.reg_errorMsg}</Text> */}
  
          {/** Input for telephone number*/}
          <View style={Styles.reg_tel_icon_flex}>
            <Icon name="mobile-phone" size={40} color="grey" />
            <TextInput
              style={Styles.reg_tel_input}
              underlineColorAndroid={"transparent"}
              placeholder={lang.reg_input_placeholder}
              onChangeText={this.props.telephone}
            />
          </View>
  
          {/** Login */}
          <TouchableOpacity
            style={Styles.reg_continue}
            onPress={() => this.props.navigation.navigate('LoginAuthCode')}
          >
            <Text style={Styles.reg_continueText}>{lang.reg_continue}</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        } />
    );
  }
}
const mapStatetoProps = state => ({
  lang: state.loginReducer.lang.lang
});

const mapActiontoProps = {};

export default connect(mapStatetoProps, mapActiontoProps)(LoginEnterTel);
