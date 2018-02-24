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
        <Text style={{top:13}}>Icon</Text>
        <TextInput
          style={Styles.reg_tel_input}
          underlineColorAndroid={"transparent"}
          placeholder={lang.reg_input_placeholder}
          onChangeText={this.props.telephone}
        />
       </View>

        {/** Login */}
        <TouchableOpacity style={Styles.reg_continue}>
          <View style={Styles.reg_icon_flex}>
            <Text>Icon</Text>
            <Text style={{ paddingLeft: 5 }}>{lang.reg_continue}</Text>
          </View>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
    );
  }
}
const mapStatetoProps = state => ({
  lang: state.lang.lang
});

const mapActiontoProps = {};

export default connect(mapStatetoProps, mapActiontoProps)(TelInputview);
