import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux";
/** 
 * KikuuIcons
 * @prop iconNane @type{ string}
 * @prop iconColor @type{ string}
 * @prop iconSize @type{ string}
 * @prop iconAction @type{func}
 * @prop iconStyle @type{css}
*/
class KikuuIcons extends Component{

    render(){
        return <Icon
               name = {this.props.iconName}
               color = {this.props.iconColor}
               size = {this.props.iconSize}
               onPress = {this.props.iconAction}
               style = {this.props.iconStyle}
               />
    }
}

export default connect(null,null)(KikuuIcons);