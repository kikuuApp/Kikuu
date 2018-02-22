import React from 'react';
import { AsyncStorage } from "react-native";
import LAC from "../kikuu_login/LoginActionConstants";
import UserModel from '../kikuu_user/UserModel';

/**
 * initApp
 * Action to call on application initialization
 * @returns dispatch action
 */
export function initApp(){
    return (dispatch) => {
        //AsyncStorage.getItem(LAC.SAVE_USER).then(usr => {
            let usr = new UserModel('iiouioo')
            usr.setTelephone('58758757585');
            usr.setIsRegistered(true);
            dispatch({type:LAC.LOAD_USER, User:null});
            
        //});
      };
};

/**
 * saveUser
 * for saving userModel object
 * @return void
 * @param {*} UserModel
 */
const saveUser = async UserModel => {
  try {
    AsyncStorage.setItem(LAC.SAVE_USER, JSON.stringify(UserModel));
  } catch (error) {
    console.log("Save error: " + error.message);
  }
};
