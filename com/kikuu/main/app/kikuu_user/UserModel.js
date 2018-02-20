import GenericUserModel from '../../utils/GenericUserModel';
import PropTypes from 'prop-types';
/** 
 * UserModel that takes care of logins
 * It extends GenericUserModel
*/
export default class UserModel extends GenericUserModel{
    constructor(pincode){
        super();
        this.pincode=pincode/**@type[string]*/;
    }

    /**
     * setPincode setter
     * takes string
     * @param {*} pincode 
     */
    setPincode(pincode/**@type[string]*/){this.pincode=pincode;}
    getPincode(){return this.pincode;}
}

/**
 * Setting class instance variable types
 */
UserModel.PropTypes={
    pincode: PropTypes.string,
}