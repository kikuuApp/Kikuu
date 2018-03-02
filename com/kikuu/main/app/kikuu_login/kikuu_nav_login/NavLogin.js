import React from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation';
import LoginEnterAuthCode from './LoginEnterAuthCode';
import LoginEnterTel from './LoginEnterTel';


export const NavLogin = StackNavigator({
    LoginTel:{screen: LoginEnterTel},
    LoginAuthCode:{screen:LoginEnterAuthCode}
},{navigationOptions:{
    initialRouteName: 'LoginTel',
}});
