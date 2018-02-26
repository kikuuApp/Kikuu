import React, { Component } from "react";
import { View,
        Text } from "react-native";
import {connect} from "react-redux";
import Styles from '../../../../../resources/static/styles/KikuuStyles';
import KikuuIcons from '../../utils/KikuuIcons';
/** 
 * SystemNavigatorHeader for navigation.
 * 
*/
class SystemNavigationHeader extends Component {
  
    constructor(props) {
      super(props);
    }
    
    render(){
        return (
            <View style={Styles.snh_main_con}>
                <View style={Styles.snh_Icontext_con}>    
                 <KikuuIcons 
                       iconName={'navicon'} 
                       iconSize={30} 
                       iconColor={this.props.iconColor}
                       iconAction={this.props.iconAction}
                       iconStyle={this.props.iconStyle}/>

                  <Text style={Styles.snh_appname_text}> Kikuu</Text>

                  </View>

                  <View  style={Styles.snh_search_con }>

                  <KikuuIcons 
                        iconName ="bullseye" 
                        iconSize = {30} 
                        iconStyle ={Styles.snh_search_icon}/>    
            </View>
        </View>
        );
    }

}
/**
 * maping the needed state to props
 * @param {*} state 
 */
const mapStateToProps= state =>({
    lang: state.loginReducer.lang.lang,
});

/** 
 * All action and events for System header
 *  should be also reported here
*/
const mapActionToProps = {

}

export default connect(mapStateToProps,mapActionToProps)(SystemNavigationHeader);