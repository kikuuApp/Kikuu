import {SystemNavigator} from './SystemNavigator';
import {combineReducers} from 'redux';

/**
 * SystemNavigator state set to control
 * Main application view.
 * @param {*} state 
 * @param {*} action 
 */
const initialState = 
SystemNavigator.router.getStateForAction(SystemNavigator.router.getActionForPathAndParams('NavLogin'));
export function SystemNavigatorStateReducer(state=initialState, action){
    const nextState = SystemNavigator.router.getStateForAction(action,state);
    return nextState || state;
}

const navReducer = combineReducers({
    SystemNavigatorStateReducer,
});
export default navReducer;