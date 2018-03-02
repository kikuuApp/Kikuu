import React from 'react';
import {TabNavigator} from 'react-navigation';
import ActivitiesScreen from './user_activities/ActivitiesScreen';
import ContactsScreen from './user_contacts/ContactsScreen';


export const NavActivitiesAndContacts = TabNavigator({
    Activities:{screen:ActivitiesScreen},
    Contacts: {screen: ContactsScreen}
},{ tabBarPosition: 'bottom'});

