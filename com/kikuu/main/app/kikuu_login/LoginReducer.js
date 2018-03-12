import LAC from "./LoginActionConstants";
import { combineReducers } from "redux";
import LANG from '../../utils/lang/LanguageConstants';

const initialState = {};
/**
 * Login Manager to manage all login
 * for the application
 * @param {*} state
 * @param {*} action
 */
export function loginManager (state = initialState, action){
  switch (action.type) {
    case LAC.USER_TEL:
      let newstate = Object.assign({}, state, action.loginModel);
      return newstate | state;
    default:
      return state;
  }
};

export function userLogin  (state={}, action) {
  switch (action.type) {
    case LAC.LOAD_USER: 
      state = Object.assign({}, state, {User:action.User});
      return state;
    default:
       return state;  
  }
};

export function lang(state={}, action){
  switch(action.type){
    case LANG:
    state = Object.assign({},state,{lang:action.lang});
    return state;  
default:
   return state;  
  }
}

/**
 * This Reducer takes care of all the countrie Payload
 * @param {*} state 
 * @param {*} action 
 */
const countries ={country_name:'United Kingdom', dialling_code:'+44',country_code:'GB'}
export function countriesReducer(state=countries, action){
  switch (action.type) {
    case LAC.COUNTRIES:
      //alert(JSON.stringify(action.countries))
      state = Object.assign({},state,{countries:action.results});
      return state;
    default:
      return state;
  }

}

export function dCodeReducer(state=countries,action){
      switch(action.type){
        case LAC.COUNTRY_DCODE:
            state = Object.assign({},state, {dialling_code:action.dialling_code});
            return state;
        default:
           return state;    
      }
}
export function cNameReducer(state={},action){

}




/**
 * set a combine reducer to
 * manage multiple reducers
 */
const loginReducer = combineReducers({
 loginManager,
 userLogin,
 lang,
 countriesReducer,
});

export default loginReducer;
