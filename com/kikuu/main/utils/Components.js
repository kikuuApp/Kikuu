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
  Button,
  KeyboardAvoidingView
} from "react-native";
import Styles from "../../../../resources/static/styles/KikuuStyles";
/**
 * LoginButton
 * @param {*} lang 
 * @param {*} style 
 * @param {*} action 
 */
export const LoginButton =(_lang,_action)=>(
    <TouchableOpacity
    style={Styles.reg_continue}
    onPress={_action}>
    <Text style={Styles.reg_continueText}>{_lang.reg_continue}</Text>
    <Button title='Hello' onPress={()=>alert('dfsd')}/>
  </TouchableOpacity>
);