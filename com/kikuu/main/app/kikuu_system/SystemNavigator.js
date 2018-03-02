import React from 'react';
import { TabNavigator, StackNavigator,DrawerNavigator } from "react-navigation";
import lang from '../../utils/lang';
import KikuuIcons from '../../utils/KikuuIcons';
import NavDrawerLeft from './kikuu_nav_drawer/nav_drawer_left/NavDrawerLeft';
import {Text} from 'react-native';

import {NavLogin} from '../kikuu_login/kikuu_nav_login/NavLogin';
import SystemNavigatorHeader from './SystemNavigatorHeader';

/**
 * navigation options
 */
const tabBarConfiguration = {
  swipeEnabled: true,
  animationEnabled: true,
  initialRouteName: 'NavLogin',
  tabBarOptions: {
    showLabel: true,
    showIcon: true,
    inactiveTintColor: 'blue',
    activeTintColor: 'grey',
    labelStyle: {
      fontSize:14,
    },
    style:{
      backgroundColor:'#eee',
    }
  }
}

/**
 * Main Application navigator
 * 
 */
export const SystemNavigator = StackNavigator({
  NavLogin:{screen:NavLogin,
          navigationOptions:{
            header:false,
          }},

  DrawerS: {screen: NavDrawerLeft,
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
     header:<SystemNavigatorHeader iconAction={()=>navigation.navigate('DrawerOpen')}/>

    }),
   
  }}, 
{  initialRouteName: 'NavLogin',}
);
