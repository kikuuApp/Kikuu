import React from "react";
import { AsyncStorage,Alert } from "react-native";
import LAC from "../kikuu_login/LoginActionConstants";
import UserModel from "../kikuu_user/UserModel";
import lang from "../../utils/lang";
import LANG from "../../utils/lang/LanguageConstants";
import { NavigationActions } from "react-navigation";
import countryCodes from "../../../../../resources/static/ccodes";

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 * initApp
 * Action to call on application initialization
 * @returns dispatch action
 */
export function initApp() {
  return dispatch => {
    //AsyncStorage.getItem(LAC.SAVE_USER).then(usr => {
    let usr = new UserModel("iiouioo");
    usr.setTelephone("58758757585");
    usr.setIsRegistered(true);
    dispatch({ type: LAC.LOAD_USER, User: usr });
    //alert(JSON.stringify(lang.en));
    //NETWORK CALL TO API TO REQUEST FOR USER PROFILE
    //dispatch(NavigationActions.navigate({routeName:'DrawerS'}));
    dispatch({ type: LANG, lang: lang.en });

    //});
  };
}

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

/**
 * CountriesList
 * @param {*} arg
 */
export const countriesListAction = arg => {
  var tel = arg !== undefined ? arg.trim():arg;
  return dispatch => {
    if (tel.length > 0) {
      results = countryCodes.filter(
        val => val.country_name.startsWith(tel.capitalize()) || val.country_name === val
      );
        dispatch({ type: LAC.COUNTRIES, results });   
    }else{
      var data = countryCodes.map((item,key)=>{ return item;});
      //alert('results check '+JSON.stringify(data));
      dispatch({ type: LAC.COUNTRIES, results:data }); 
    }
  }
}

export const CCSearchListAction = (args) => {
  return dispatch =>{
    var val = countryCodes.filter(val => val.country_name  === args);
    //alert('results check '+JSON.stringify(val));
    dispatch({type:LAC.COUNTRIES, results:val});
    
  }
};

export const countriesInit=()=>{

   return dispatch =>{
     /**
      * Check from asyncstorage if Country exixts,
      * if not, then set to the local or use a default data.
      */ 
    var args = 'United Kingdom';
    var val = countryCodes.filter(val => val.country_name  === args);
    if(val !== null){
      dispatch({type:LAC.COUNTRY_INIT, 
        country_name:val[0].country_name,
        dialling_code:val[0].dialling_code,
        country_code: val[0].country_code
      });

      dispatch({ type: LAC.COUNTRIES, results:val });  
    }
   }
}

export function countryCodeAction(tel) {}

