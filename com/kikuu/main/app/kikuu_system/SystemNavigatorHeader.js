import React, { Component } from "react";
import { View,
        Text,
        TextInput } from "react-native";
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
        /**
         * check for boolean to show search
         * @TODO come back andd implement the logic with searchBoolean
         */
        if(!this.props.lang) return( <View style={Styles.snh_main_con}>
                                      <TextInput 
                                            underlineColorAndroid={'transparent'}
                                            style={{alignSelf:'stretch',backgroundColor:'lightblue',flex:1}}
                                            onChangeText={(val)=>alert(val)}/>
                                     </View>
                                     )
        /**
         * Default header to show
         */                             
        return (
            <View style={Styles.snh_header_conWrapper}>

            <View style={Styles.snh_main_con}>
                <View style={Styles.snh_Icontext_con}>    
                 <KikuuIcons 
                       iconName={'menu'} 
                       iconSize={20} 
                       //iconColor={this.props.iconColor}
                       iconAction={this.props.iconAction}
                       iconStyle={this.props.iconStyle}/>

                  <Text style={Styles.snh_appname_text}> Kikuu</Text>

                  </View>

                  <View  style={Styles.snh_search_con }>
                        {/*** Search Icon*/}
                        <KikuuIcons 
                                iconName ="magnifier" 
                                iconSize = {20} 
                                iconStyle ={Styles.snh_search_icon}/>

                        {/*** Vertical Option Icon*/}
                        <KikuuIcons 
                                iconName ="options-vertical" 
                                iconSize = {20} 
                                iconStyle ={Styles.snh_search_icon}/>
                  </View>
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