import React from 'react';
import { TabNavigator, StackNavigator,DrawerNavigator } from "react-navigation";
import ActivitiesScreen from "../kikuu_user_activities/ActivitiesScreen";
import ContactsScreen from "../kikuu_user_contacts/ContactsScreen";
import lang from '../../utils/lang';
import KikuuIcons from '../../utils/KikuuIcons';

/**
 * navigation options
 */
const tabBarConfiguration = {
  swipeEnabled: true,
  animationEnabled: true,
  initialRouteName: 'Activities',
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
  Activities: {
    screen: ActivitiesScreen,
  },
  Contacts: {
    screen: ContactsScreen,
  }
}, 
  tabBarConfiguration
);
