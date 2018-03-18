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
import Styles from "../../../../../../resources/static/styles/KikuuStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import GenericLoginScreen from "../../../utils/GenericLoginScreen";
import countryCodes from "../../../../../../resources/static/ccodes";
import { LoginButton } from "../../../utils/Components";

import { countriesListAction, CCSearchListAction } from "../LoginActions";
import {KikuuText} from '../../../utils/KikuuCommunicator';


/**
 * Telephone registration view
 * @class
 */
class LoginEnterTel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      telNumber:''
    };
  }

  static navigationOptions = ({ navigation }) => ({
    header: false
  });

  /**
   * Navigate to Countries and Code
   */
  navigateToCandC = (arg) => {
    try {
      //var cName = arg.trim();
      this.props.countriesListAction(arg);
      this.props.navigation.navigate("CountriesAndCode")
    } catch (err) {
          alert(err)
    }
  };


  sendMsg(teln,smsMsg,isDirect=true){
    var direct = isDirect ? 'sendDirect' :'sendIndirect';
  }
  /**
   * Logic to collect and send sms.
   * if telnum > 10, send msg else alert error
   */
  confirmTelNumber() {
    var telnum = this.props.countriesReducer.countries[0].dialling_code+this.state.telNumber;
    telnum = telnum.replace('/\s/g','').trim();

      //Commented for development  
    this.props.navigation.navigate("LoginAuthCode"); 
    //   if(telnum.length - 1 > 10){
    //     KikuuText(telnum, this.props.lang.reg_pincode_RequestMsg);
    //     this.props.navigation.navigate("LoginAuthCode"); 
    //   }else{
    //     Alert.alert('Error!',this.props.lang.reg_tel_errorMsg);
    // }
  }

  render() {
    const { lang, countriesReducer,cCInitReducer } = this.props;
    //alert(JSON.stringify(this.props.countriesReducer.countries[0]));
    return (
      <GenericLoginScreen
        isAppHeader ={true}
        model={
          <View style={Styles.oneTime_Flex}>
            <KeyboardAvoidingView style={Styles.reg_input_con}>

              {/**-------Country-------------*/} 
              <Text style={Styles.reg_tel_country}
                ref='_countriesSelect'
                onPress={()=>
                  this.navigateToCandC(this.props.countriesReducer.countries[0].country_name || 'United Kingdom' )}>

                {countriesReducer.countries !== null ? countriesReducer.countries[0].country_name : 'United Kingdom'}
                </Text>

              {/** Input for telephone number*/}
              <View style={Styles.reg_tel_con_flex}>

                 <Text style={Styles.reg_tel_code}>
                  {countriesReducer.countries !== null ? countriesReducer.countries[0].dialling_code : '+ 44'}

                </Text> 

                <TextInput
                  ref={rf => (this.telInputRef = rf)}
                  style={Styles.reg_tel_input}
                  keyboardType={"phone-pad"}
                  underlineColorAndroid={"transparent"}
                  placeholder={lang.reg_input_placeholder}
                  onChangeText={tel => this.setState({telNumber:tel})}
                />
              </View>
            </KeyboardAvoidingView>
              {/** Text field for instructions*/}
              <Text style={Styles.reg_instruction}>{lang.reg_instruction}</Text>
            <ScrollView />

            {/** Login */}
            <TouchableOpacity
              style={Styles.reg_continue}
              onPress={() => this.confirmTelNumber()}>
              
              <Text style={Styles.reg_continueText}>{lang.reg_continue}</Text>
            </TouchableOpacity>
          </View>
        }
      />
    );
  }
}
const mapStatetoProps = state => ({
  lang: state.loginReducer.lang.lang,
  countriesReducer: state.loginReducer.countriesReducer,
  cNameReducer: state.loginReducer.cNameReducer,
  dCodeReducer: state.loginReducer.dCodeReducer,
  cCInitReducer: state.loginReducer.cCInitReducer,
});

const mapActiontoProps = { countriesListAction, CCSearchListAction };

export default connect(mapStatetoProps, mapActiontoProps)(LoginEnterTel);
