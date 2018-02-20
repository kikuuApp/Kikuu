import Proptypes from 'prop-types';
import GenericScreen from './GenericScreen';
import UserMonitor from '../app/kikuu_user/UserMonitor';
import UserProfile from '../app/kikuu_user/UserProfile';

/** 
 * GenericUsermodel to manage all users models
*/
export default class GenericUserModel{
    constructor(uid,userMood,telephone,UserMonitor,UserProfile){
        this.uid = uid/**@type[string]*/;
        this.userMood = userMood/**@type[string]*/;
        this.telephone = telephone/**@type[string]*/;
        this.UserMonitor = UserMonitor; /**@class[UserMonitor]*/;
        this.UserProfile = UserProfile /**@class[UserProfile]*/;
    }
   
    /**
     * setUid setter
     * Takes String
     * @param {*} uid 
     */
   setUid(uid/** string*/){this.uid = uid;}    
   getUid(){return this.uid;}
    
   /**
    * setUserMood
    * Set the user mood
    * takes String
    * @param {*} usermood 
    */
   setUserMood(usermood/**string*/){this.userMood=usermood;}
   getUserMood(){return this.userMood;}

   /**
    * setTelephone
    * user telephone
    * Takes String
    * @param {*} telephone 
    */
   setTelephone(telephone/**string*/){this.telephone=telephone;}
   getTelephone(){return this.telephone;}
    
   /**
    * setUserMonitor
    * Manage user monitor such as online offline etc
    * takes UserMonitor class
    * @param {*} UserMonitor 
    */
   setUserMonitor(UserMonitor/**@class[UserMonitor]*/){this.UserMonitor=UserMonitor;}
   getUserMonitor(){return this.UserMonitor;}

   /**
    * SetUserProfile
    * User profile settings
    * takes Userprofile class
    * @param {*} UserProfile 
    */
   setUserProfile(UserProfile/** @class[UserProfile]*/){this.UserProfile=UserProfile;}
   getUserProfile(){return this.UserProfile}
}

GenericScreen.Proptypes={
    uid: Proptypes.string,
    userMood: Proptypes.string,
    telephone: Proptypes.string,
    UserMonitor: Proptypes.objectOf(UserMonitor),
    UserProfile: Proptypes.objectOf(UserProfile),
}