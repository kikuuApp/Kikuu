import {combineReducers} from 'redux';
import loginReducer from '../app/kikuu_login/LoginReducer';


/**
 * The rootreducders combines multiple
 * combine reducers app wide.
 * This is where all reducers are registered  
 */
const rootReducers = combineReducers({
    loginReducer,
});

export default rootReducers;