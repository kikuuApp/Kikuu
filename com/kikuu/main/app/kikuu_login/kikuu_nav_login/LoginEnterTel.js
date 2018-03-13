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

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

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

  navigateToCandC = (arg) => {
   
    try {
      var cName = arg.trim();
      this.props.countriesListAction(cName);
      return this.props.navigation.navigate("CountriesAndCode")
    } catch (err) {

    }
  };

  
  manageCountryinput(arg) {
    var arg = arg.trim();
    this._countriesSelect.setNativeProps({ text: arg.capitalize() });
    this.props.countriesListAction(arg);
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
                onPress={()=>this.navigateToCandC(countriesReducer.countries[0].country_name )}>

                {countriesReducer.countries[0].country_name }
                </Text>

              {/** Input for telephone number*/}
              <View style={Styles.reg_tel_con_flex}>

                 <Text style={Styles.reg_tel_code}>
                  {countriesReducer.countries[0].dialling_code}

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
              onPress={() => this.props.navigation.navigate("LoginAuthCode")}>
              
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
