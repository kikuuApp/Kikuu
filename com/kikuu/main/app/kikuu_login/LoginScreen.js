import React, { Component } from "react";
import { View, Text } from "react-native";
import UserModel from "../kikuu_user/UserModel";
import { connect } from "react-redux";
import GenericScreen from '../../utils/GenericScreen';

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

  render() {
    return (
        <GenericScreen/>
    );
  }
}

//All states from LoginReducers
const mapStateToProps = state => ({});

//All Actions from LoginAction
const mapDispatchToProps = {};

export default connect(null, null)(LoginScreen);
