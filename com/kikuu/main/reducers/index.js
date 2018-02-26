import {combineReducers} from 'redux';
import loginReducer from '../app/kikuu_login/LoginReducer';
import navReducer,{SystemNavigatorStateReducer} from '../app/kikuu_system/SystemNavigatorReducer';

/**
 * The rootreducders combines multiple
 * combine reducers app wide.
 * This is where all reducers are registered  
 */
const rootReducers = combineReducers({
    loginReducer,  //Login combine reducer
    navReducer,    // Combine SystemNavigatorReducer navigation
   
});

export default rootReducers;