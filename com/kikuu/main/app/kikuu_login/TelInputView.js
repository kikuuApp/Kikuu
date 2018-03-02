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
import Styles from "../../../../../resources/static/styles/KikuuStyles";
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Telephone registration view
 * @class
 */
class TelInputview extends Component {
  render() {
    const { lang } = this.props;

    return (
      <KeyboardAvoidingView style={Styles.reg_input_con}>
        {/** Text field for instructions*/}
        <Text style={Styles.reg_instruction}>{lang.reg_instruction}</Text>
       
        {/**Error message*/}
        <Text style={Styles.reg_instruction}>{lang.reg_errorMsg}</Text>
        
      
        {/** Input for telephone number*/}
        <View style={Styles.reg_tel_icon_flex}>
        <Icon name="mobile-phone" size={40} color="blue" />
        <TextInput
          style={Styles.reg_tel_input}
          underlineColorAndroid={"transparent"}
          placeholder={lang.reg_input_placeholder}
          onChangeText={this.props.telephone}
        />
       </View>

        {/** Login */}
        <TouchableOpacity style={Styles.reg_continue}onPress={()=>Navigation.navigate()}>
            <Text style={Styles.reg_continueText}>{lang.reg_continue}</Text>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
    );
  }
}
const mapStatetoProps = state => ({
  lang: state.loginReducer.lang.lang,
});

const mapActiontoProps = {};

export default connect(mapStatetoProps, mapActiontoProps)(TelInputview);
