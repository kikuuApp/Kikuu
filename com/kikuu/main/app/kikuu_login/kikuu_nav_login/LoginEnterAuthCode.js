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
import { NavigationActions } from "react-navigation";


/**
 * Telephone registration view
 * @class
 */
class LoginEnterAuthCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: ""
    };
  }

  checkpin(val) {
    if (val.length >= 5) {
      const navActions = NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: "DrawerS" })]
      });
      this.props.navigation.dispatch(navActions);
    }
  }

  static navigationOptions = ({ navigation }) => ({
    header: false
  });

  render() {
    const { lang } = this.props;

    return (
      <GenericLoginScreen
        model={
          <KeyboardAvoidingView style={Styles.reg_input_con}>
            {/**Text field for instructions*/}
            

            {/**Error message*/}
            {/* <Text style={Styles.reg_instruction}>{lang.reg_errorMsg}</Text> */}
            
            <Text style={Styles.reg_instruction}>{lang.reg_pincode_do}</Text>

            {/**Input Authentication code number*/}
            <View style={Styles.reg_tel_con_flex}>
              <TextInput
                secureTextEntry={true}
                style={Styles.reg_authcode_input}
                keyboardType={'numeric'}
                underlineColorAndroid={"transparent"}
                placeholder={lang.reg_authcode_placeholder}
                onChangeText={val => this.checkpin(val)}
              />
            </View>


            {/**Login */}
            {/* <TouchableOpacity
              style={Styles.reg_continue}
              onPress={() => this.props.navigation.navigate("DrawerS")}
            >
              <Text style={Styles.reg_continueText}>{lang.reg_continue}</Text>
            </TouchableOpacity> */}
          </KeyboardAvoidingView>
        }
      />
    );
  }
}
const mapStatetoProps = state => ({
  lang: state.loginReducer.lang.lang
});

const mapActiontoProps = {};

export default connect(mapStatetoProps, mapActiontoProps)(LoginEnterAuthCode);
