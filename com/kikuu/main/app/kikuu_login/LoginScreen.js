import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native";
import UserModel from "../kikuu_user/UserModel";
import { connect } from "react-redux";
import GenericScreen from "../../utils/GenericScreen";
import { initApp } from "./LoginActions";
import lang from "../../utils/app_languages";
import TelInputview from "./TelInputView";
import { loginManager } from "./LoginReducer";

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

  userPinCheck=(val)=>{
    if(val.length > 5 && val.length < 11) this.kUser.setTelephone(val)
  }
  render() {
    const { userLogin, loginManager} = this.props;
    //alert(JSON.stringify(this.props));
    try {
      if (userLogin.User.isRegistered && userLogin.User.telephone !== undefined) {
        //MAin application Activity view
        return <View><Text>Passed in here</Text></View>
      } else {
        //Show pincode view
        return <GenericScreen model={<Text>hello world here {userLogin.User.pincode}-- nop</Text>} />;
      }
    } catch (error) {
      /**
       * Show main Login view
       */
      return <GenericScreen
             model={<TelInputview telephone={this.userPinCheck}/>}
             />
    }
  }
}

//All states from LoginReducers
const mapStateToProps = state => ({
  userLogin: state.userLogin,
  loginManager: state.loginManager
});

//All Actions from LoginAction
const mapActionToProps = {
  initApp,
};

export default connect(mapStateToProps, mapActionToProps)(LoginScreen);
