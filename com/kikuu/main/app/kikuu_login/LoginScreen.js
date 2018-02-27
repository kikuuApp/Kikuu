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
    try {
      if (
        userLogin.User.isRegistered &&
        userLogin.User.telephone !== undefined
      ) {
        //MAin application Activity view
        return (
          <View style={Styles.oneTime_Flex}>

            {/** Main Navigation header*/}
            {/* <SystemNavigatorHeader
              iconAction={() => alert("42342")}
              iconStyle={{}}
            /> */}

            <SystemNavigatorScreen />
          </View>
        );
      } else {
        //Show pincode view
        return (
          <GenericLoginScreen
            model={<Text>hello world here {userLogin.User.pincode}-- nop</Text>}
          />
        );
      }
    } catch (error) {
      /**
       * Show main Login view
       */
      return (
        <GenericLoginScreen
          model={<TelInputview telephone={this.userPinCheck} />}
        />
      );
    }
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
