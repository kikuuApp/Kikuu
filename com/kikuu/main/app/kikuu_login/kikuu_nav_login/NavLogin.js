import React from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation';
import LoginEnterAuthCode from './LoginEnterAuthCode';
import LoginEnterTel from './LoginEnterTel';
import Welcome from './Welcome';
import CountriesAndCode from './CountriesAndCode';

export const NavLogin = StackNavigator({
    Welcome:{screen: Welcome},
    LoginTel:{screen: LoginEnterTel},
    LoginAuthCode:{screen:LoginEnterAuthCode},
    CountriesAndCode:{screen:CountriesAndCode}
},{navigationOptions:{
    initialRouteName: 'Welcome',
}});
