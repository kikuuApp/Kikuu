import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView
} from "react-native";
import { Button } from "react-native-elements";
import Styles from "../../../../../../resources/static/styles/KikuuStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import GenericLoginScreen from "../../../utils/GenericLoginScreen";
import countryCodes from '../../../../../../resources/static/ccodes';

/**
 * Telephone registration view
 * @class
 */
class LoginEnterTel extends Component {
  
  constructor(props){
    super(props);
    this.state={
      names:[]
    }
  }

  static navigationOptions =({navigation})=>({
    header:false,
  });
  
  manageTelInput =( tel )=>{
    let results=[];

    if( tel.length > 1){
        results = countryCodes.filter(val =>
            val.dialling_code.startsWith(tel) ||val.dialling_code === val ) 
        }

     this.setState({names:results});    
  }

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
              style={Styles.reg_tel_input}
              keyboardType={'phone-pad'}
              underlineColorAndroid={"transparent"}
              placeholder={lang.reg_input_placeholder}
              onChangeText={(tel)=>this.manageTelInput(tel)}
            />
          </View>
          
          <ScrollView style={{zIndex:1, position: 'absolute',}}> 
              <Text>{this.state.names.length > 0 ?JSON.stringify(this.state.names):null}</Text>
          </ScrollView> 

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
