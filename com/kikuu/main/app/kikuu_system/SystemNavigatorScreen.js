import React, {Component} from 'react';
import {SystemNavigator} from './SystemNavigator';
import {connect} from 'react-redux';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import {BackHandler} from "react-native";
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';


/***
 * Main Application Entry Point
 */
class SystemNavigatorScreen extends Component {

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    /***
     *  Back Manager
     * @returns {boolean}
     */
    onBackPress = () => {
        const {dispatch, mainNav} = this.props;
        if (mainNav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const {dispatch, mainNav} = this.props;

        /***
         * Returning the Main Navigation Entry Point
         */
        return (
            <SystemNavigator
                navigate={addNavigationHelpers({
                    dispatch: dispatch,
                    state: mainNav,
                })}
            />
        );
    }
}

export function mapStateToProps(state) {
    return {
        mainNav: state.navReducer.SystemNavigatorStateReducer
    }
}
export default connect(mapStateToProps,null)(SystemNavigatorScreen);