import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { Button } from "react-native-elements";
import Styles from "../../../../../../resources/static/styles/KikuuStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import GenericLoginScreen from "../../../utils/GenericLoginScreen";
import countryCodes from "../../../../../../resources/static/ccodes";

/**
 * Telephone registration view
 * @class
 */
class LoginEnterTel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cCodes: [],
      isScroll: true
    };
  }

  static navigationOptions = ({ navigation }) => ({
    header: false
  });

  /**
   * manage Telephone inputs and fix
   * inputs errors
   */
  manageTelInput = telInput => {
    let results = [];
    let tel = telInput.trim();

    if (!tel.startsWith("+")) {
      if (tel === "0" || tel === "00") {
        tel = tel.replace("00", "+");
        this.telInputRef.setNativeProps({ text: "" });
        this.telInputRef.setNativeProps({ text: tel });
      } else {
        tel = tel.length > 0 ? "+" + tel : "";
        this.telInputRef.setNativeProps({ text: "" });
        this.telInputRef.setNativeProps({ text: tel });
      }
    }
    if (tel.length > 1) {
      results = countryCodes.filter(
        val => val.dialling_code.startsWith(tel) || val.dialling_code === val
      );
      //results.length > 1 ?this.setState({isScroll:true}):this.setState({isScroll:false});
    }

    this.setState({ cCodes: results });
    
  };

  showHideContinue = state => {

    return (
        state.cCodes.map((item, index) => (
        <View
          key={item.country_code}
          style={{
            alignSelf: "stretch",
            backgroundColor: "#eee",
            marginBottom: 2,
            marginTop: 2,
            padding:10,
            maxHeight:200,
          }}
        >
          <Text style={{alignSelf: "stretch"}}>{item.country_name}</Text>
        </View>
        ) )
      
    );
  };

  render() {
    const { lang } = this.props;

    return (
      <GenericLoginScreen
        model={
          <KeyboardAvoidingView style={Styles.reg_input_con}>
            {/** Text field for instructions*/}
            <Text style={Styles.reg_instruction}>{lang.reg_instruction}</Text>

            {/**Error message*/}
            {/* <Text style={Styles.reg_instruction}>{lang.reg_errorMsg}</Text> */}

            {/** Input for telephone number*/}
            <View style={Styles.reg_tel_icon_flex}>
              <Icon name="mobile-phone" size={40} color="grey" />
              <TextInput
                ref={rf => (this.telInputRef = rf)}
                style={Styles.reg_tel_input}
                keyboardType={"phone-pad"}
                underlineColorAndroid={"transparent"}
                placeholder={lang.reg_input_placeholder}
                onChangeText={tel => this.manageTelInput(tel)}
              />
            </View>

            {/** A scrollview */}
            <ScrollView>

            {this.state.cCodes.length > 0
              ? this.showHideContinue(this.state)
              : null}
            </ScrollView>

            {/** Login */}
            {this.state.isScroll ? (
              <TouchableOpacity
                style={Styles.reg_continue}
                onPress={() => this.props.navigation.navigate("LoginAuthCode")}
              >
                <Text style={Styles.reg_continueText}>{lang.reg_continue}</Text>
              </TouchableOpacity>
            ) : null}
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

export default connect(mapStatetoProps, mapActiontoProps)(LoginEnterTel);
