import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native";
import UserModel from "../kikuu_user/UserModel";
import { connect } from "react-redux";
import GenericLoginScreen from "../../utils/GenericLoginScreen";
import { initApp } from "./LoginActions";
import TelInputview from "./TelInputView";
import { loginManager } from "./LoginReducer";
import SystemNavigatorScreen from "../kikuu_system/SystemNavigatorScreen";
import SystemNavigatorHeader from "../kikuu_system/SystemNavigatorHeader";
import Styles from "../../../../../resources/static/styles/KikuuStyles";
//import DrawerS from "../kikuu_system/DrawerS";

/**
 * KikuuLoginScreen manages the Logins
 * Check and Authenticate User Logins and Signup
 */
class LoginScreen extends Component {
  constructor(props) {
    super(props);

    //KikuuUserModel instantiated
    this.kUser = new UserModel();
  }

  componentDidMount = () => {
    this.props.initApp();
  };

  userPinCheck = val => {
    if (val.length > 5 && val.length < 11) this.kUser.setTelephone(val);
  };
  render() {
    const { userLogin, loginManager } = this.props;
    //alert(JSON.stringify(this.props));

        return (
          <View style={Styles.oneTime_Flex}>
          {/** Main Application entry point*/}
            <SystemNavigatorScreen /> 
          </View>
        );
  }
}

//All states from LoginReducers
const mapStateToProps = state => ({
  userLogin: state.loginReducer.userLogin,
  loginManager: state.loginReducer.loginManager,
  lang: state.loginReducer.lang.lang
});

//All Actions from LoginAction
const mapActionToProps = {
  initApp
};

export default connect(mapStateToProps, mapActionToProps)(LoginScreen);
