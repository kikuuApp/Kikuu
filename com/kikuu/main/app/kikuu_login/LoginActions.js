import React from 'react';
import { AsyncStorage } from "react-native";
import LAC from "../kikuu_login/LoginActionConstants";
import UserModel from '../kikuu_user/UserModel';
import lang from '../../utils/lang';
import LANG from '../../utils/lang/LanguageConstants';
import { NavigationActions } from 'react-navigation';

/**
 * initApp
 * Action to call on application initialization
 * @returns dispatch action
 */
export function initApp(){
    return (dispatch) => {
        //AsyncStorage.getItem(LAC.SAVE_USER).then(usr => {
            let usr = new UserModel('iiouioo');
            usr.setTelephone('58758757585');
            usr.setIsRegistered(true);
            dispatch({type:LAC.LOAD_USER, User:usr});
            //alert(JSON.stringify(lang.en));
            //NETWORK CALL TO API TO REQUEST FOR USER PROFILE
            //dispatch(NavigationActions.navigate({routeName:'DrawerS'}));
            dispatch({type:LANG,lang:lang.en});
            
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
