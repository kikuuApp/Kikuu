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
import {LoginButton} from '../../../utils/Components';

import {countriesListAction,navigatorAction} from '../LoginActions';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 * Telephone registration view
 * @class
 */
class LoginEnterTel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cCodes: [],
      isScroll: true,
      alVal: ""
    };
  }

  static navigationOptions = ({ navigation }) => ({
    header: false
  });

  navigateToCandC =(obj)=>{
   return obj.countries.length > 0 ? 
    this.props.navigation.navigate('CountriesAndCode'):null
  }

  /**
   * manage Telephone inputs and fix
   * inputs errors.
   * sets results to this.state @type{Object}
   * @param telInput
   * @returns void
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
        if (tel.charAt(0) === "+" && tel.charAt(1) === "0") {
          tel = tel.replace("+0", "+");
        }
        this.telInputRef.setNativeProps({ text: "" });
        this.telInputRef.setNativeProps({ text: tel });
      }
    }
    if (tel.length > 1 && tel.length <= 4) {
      results = countryCodes.filter(
        val => val.dialling_code.startsWith(tel) || val.dialling_code === val
      );
    } else {
      var myValue = "";
      var cc = 0;
      var innerC = 0;
      
      for (x = 0; x < tel.length; x++) {
        cc += 1;
        if (cc < 11) {
          if (cc % 5 == 0) {
            if (tel[x] === " ") {
              myValue += tel[x];
            } else {
              myValue += " " + tel[x];
            }
          } else {
            myValue += tel[x];
          }
        } else {
          //myValue += tel[x];
          console.log('1 check val'+myValue)
          if (innerC <=2  ) {
            myValue += tel[x];
            console.log(innerC+' 2 check val'+myValue)
          } else {
            if (innerC % 4) {
              if (tel[x] === " ") {
                myValue += tel[x];
              } else {
                myValue += " " + tel[x];
                console.log(myValue)
              }
            } else {
              myValue += tel[x];
            }
          }
          innerC = innerC+1;
        }
        //myValue += tel[x];
      }
      this.telInputRef.setNativeProps({ text: "" });
      this.telInputRef.setNativeProps({ text: myValue });
      myValue = "";
    }
    this.setState({ cCodes: results });
  };

  /**countrieslist
   * countriesScrollList
   * displays List of countries in the scrollView
   * @param state
   * @return listView
   */
  countriesScrollList = state => {
    return state.cCodes.map((item, index) => (
      <View key={item.country_code} style={Styles.reg_countries_ScrollList}>
        <Text
          onPress={() => {
            this.telInputRef.setNativeProps({ text: "" });
            this.telInputRef.setNativeProps({ text: item.dialling_code });
            this.setState({ cCodes: "" });
          }}
        >
          {item.country_name}
        </Text>
      </View>
    ));
  };
 
manageCountryinput(arg){
  var arg = arg.trim();
  this._countriesSelect.setNativeProps({ text: arg.capitalize() });
  this.props.countriesListAction(arg) 
}

  render() {
    const { lang,countriesReducer } = this.props;
    this.navigateToCandC(countriesReducer);
    
    return (
      <GenericLoginScreen
        model={
          <View style={Styles.oneTime_Flex}>
            <KeyboardAvoidingView style={Styles.reg_input_con}>
              {/** Text field for instructions*/}
              <Text style={Styles.reg_instruction}>{lang.reg_instruction}</Text>

              {/**Error message*/}
              {/* <Text style={Styles.reg_instruction}>{lang.reg_errorMsg}</Text> */}

              <TextInput 
                ref={(val) => this._countriesSelect =val}
                onChangeText={(val)=>this.manageCountryinput(val)}
              />

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
            </KeyboardAvoidingView>

            <ScrollView/> 

            {/** Login */}
              <TouchableOpacity
                style={Styles.reg_continue}
                onPress={() => this.props.navigation.navigate("LoginAuthCode")}
              >
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
});

const mapActiontoProps = { countriesListAction,navigatorAction};

export default connect(mapStatetoProps, mapActiontoProps)(LoginEnterTel);
