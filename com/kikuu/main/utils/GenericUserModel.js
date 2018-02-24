import Proptypes from 'prop-types';
import GenericLoginScreen from './GenericLoginScreen';
import UserMonitor from '../app/kikuu_user/UserMonitor';
import UserProfile from '../app/kikuu_user/UserProfile';

/** 
 * GenericUsermodel to manage all users models
*/
export default class GenericUserModel{
    constructor(uid,telephone,userMood,isRegistered,UserMonitor,UserProfile){
        this.uid = uid/**@type[string]*/; 
        this.telephone = telephone/**@type[string]*/;
        this.userMood = userMood/**@type[string]*/;
        this.isRegistered = this.isRegistered;
        this.UserMonitor = UserMonitor; /**@class[UserMonitor]*/;
        this.UserProfile = UserProfile /**@class[UserProfile]*/;
    }
   
    /**
     * setUid setter
     * @param {*} uid
     * returns string 
     */
   setUid(uid/** string*/){this.uid = uid;}    
   getUid(){return this.uid;}

   /**
    * setTelephone
    * user telephone
    * @param {*} telephone
    * @returns string 
    */
   setTelephone(telephone/**string*/){this.telephone=telephone;}
   getTelephone(){return this.telephone;}
        
   /**
    * setUserMood
    * Set the user mood
    * @param {*} usermood
    * @returns string 
    */
   setUserMood(usermood/**string*/){this.userMood=usermood;}
   getUserMood(){return this.userMood;}
    
   /**
    * setIsRegistered
    * set if user is registered.
    * @param {*} isRegistered 
    * @returns Boolean
    */
    setIsRegistered(isRegistered){this.isRegistered=isRegistered;}
    getIsRegistered(){return this.isRegistered;}
   /**
    * setUserMonitor
    * Manage user monitor such as online offline etc
    * @returns UserMonitor class
    * @param {*} UserMonitor 
    */
   setUserMonitor(UserMonitor/**@class[UserMonitor]*/){this.UserMonitor=UserMonitor;}
   getUserMonitor(){return this.UserMonitor;}

   /**
    * SetUserProfile
    * User profile settings
    * @returns Userprofile class
    * @param {*} UserProfile 
    */
   setUserProfile(UserProfile/** @class[UserProfile]*/){this.UserProfile=UserProfile;}
   getUserProfile(){return this.UserProfile}
}

GenericLoginScreen.Proptypes={
    uid: Proptypes.string,
    userMood: Proptypes.string,
    isRegistered: Proptypes.bool,
    telephone: Proptypes.string,
    UserMonitor: Proptypes.objectOf(UserMonitor),
    UserProfile: Proptypes.objectOf(UserProfile),
}