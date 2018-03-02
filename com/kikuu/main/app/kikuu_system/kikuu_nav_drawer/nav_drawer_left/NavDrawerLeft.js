import React from 'react';
import {DrawerNavigator } from 'react-navigation';
import {View,Text} from 'react-native';
import {NavActivitiesAndContacts} from './user_activities_contacts/NavActivitiesAndContacts';

const Nav1 =(props)=>{
      return ( <NavActivitiesAndContacts/>)
};
const Nav2 =(props)=>{
    return (   
       <View style={{flex:1}}>
           <Text>navi 2</Text>
       </View>
    )
};
const Nav3 =(props)=>{
    return (   
       <View style={{flex:1}}>
           <Text>navi 3</Text>
       </View>
    )
};
const Nav4 =(props)=>{
    return (   
       <View style={{flex:1}}>
           <Text>navi 4</Text>
       </View>
    )
};

const NavDrawerLeft = DrawerNavigator({
    Nav1 :{ screen: Nav1,},
    Nav2 :{ screen: Nav2},
    Nav3 :{ screen: Nav3},
    Nav4 :{ screen: Nav4},
}); 

export default NavDrawerLeft;