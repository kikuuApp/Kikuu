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
 * set a combine reducer to
 * manage multiple reducers
 */
const loginReducer = combineReducers({
 loginManager,
 userLogin,
 lang,
});

export default loginReducer;
