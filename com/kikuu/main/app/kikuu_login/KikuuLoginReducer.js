import  LAC from './KikuuLoginActionConstants';
import {combineReducers} from 'redux';

const initialState = {}
/**
 * Login Manager to manage all login
 * for the application
 * @param {*} state 
 * @param {*} action 
 */
  const loginManager = (state = initialState, action) => {
  switch (action.type) {

  case LAC.USER_TEL:
    let newstate = Object.assign({},state,action.loginModel);
    return newstate | state;

  default:
    return state
  }
}

/** 
 * set a combine reducer to 
 * manage multiple reducers
*/
const loginReducer = combineReducers({
  loginManager,
});

// export loginreducer as main Login reducer
export default loginReducer; 