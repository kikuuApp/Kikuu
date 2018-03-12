import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

/** 
 * Application Dimensions
*/
const {width , height} = Dimensions.get('window');

const Styles = StyleSheet.create({
    

      /**
       * Generic one-time flex:1
       */
       oneTime_Flex:{
           flex:1,
       },

    /**---------------CountriesAndCode-------------*/
    
    /***
     * main countries and code
     */
     cc_code_main:{
         flex:1,
         backgroundColor:'rgb(213, 219, 219)',
     },

    /**
     * GenericLoginScreen Component
     */

    /**SafeAreaView */
    gen_ls_con:{
        flex: 1, 
        alignSelf: "stretch",
        backgroundColor:'rgb(52, 152, 219)',
        // alignContent:'center',
        alignItems:'center',
     },
    
    /**ImageBackground */
    gen_ls_bg_con:{
        backgroundColor: "#F5FCFF",
        flex:1,
        alignItems: 'center',
      
    },
    
    /**Image */
    gen_ls_AppIcon:{ 
        width: 80,
        height: 80, 
        top:20, 
        flexDirection: "row-reverse" 
    },
    /**Application name */
    gen_app_name:{
        color:'white', 
        fontSize:26,
        fontWeight:'bold',
        marginTop:15
    },
    /**Application slogan */
    gen_app_slogan:{
        fontFamily:'cursive', 
        fontSize:15, 
        color:'darkblue'
    },
        
    /**View container for model */
    gen_ls_model:{
        alignSelf:'stretch',
        paddingLeft:50,
        paddingRight:50,
        paddingTop:15,
        flex:1,
        flexDirection:'column',
        //backgroundColor:'red',
    },

    /**
     * Registration view css
     */
/*-----------------Registration view------------------*/
    /**keyboradAvoidingView */
    reg_input_con:{
        alignSelf:'stretch',
        position:'relative',
    //    backgroundColor:'pink',
        alignContent:'center',
    }, 

    /**Text */
    reg_instruction:{
        borderColor:'white',
        borderWidth:1,
        padding:5,
        marginBottom:10,
        textAlign:'center',
        color:'white',
    },

    /**TextInput for reg telepnoe numbers*/            
    reg_tel_input:{
        alignSelf:'stretch',
        flex:1,
        textAlign:'left',
        fontSize:24,
        height:50,
        marginTop:-5,
        //borderRadius:25,
    },  
     
    reg_authcode_input:{
        alignSelf:'stretch',
        flex:1,
        textAlign:'center',
        fontSize:24,
        height:50,
        marginTop:-5,
    }, 
    /**TouchableOpacity button container */
    reg_continue:{
        backgroundColor:'rgb( 46, 204, 113 )',
        padding:12, alignItems:'center',
        //borderRadius:25,
        marginTop:5,
        marginBottom:10,
    }, 
    
    reg_continueText:{ 
        paddingLeft: 5,
        color:'white', 
        fontSize:20,
    },
    
    reg_icon_flex:{
       flexDirection:'row',
    },
    reg_tel_icon_flex:{
        flexDirection:'row',
        backgroundColor:'rgb(255,255,255)',
        paddingRight:5,
        paddingTop:5,
        paddingLeft:20,
        //borderRadius:25,
        marginBottom: 2,
     },
     
     reg_countries_ScrollList:{
        alignSelf: "stretch",
        backgroundColor: "#eee",
        marginBottom: 2,
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:10,
         
     },
     /**---------------SystemNavigationHeader----------- */
     snh_header_conWrapper:{
        flexDirection:'column',
        alignItems:'center',
        alignContent:'center',
        height:40,
     },

     snh_main_con:{
        backgroundColor:'#eee',
        alignSelf:'stretch',
        paddingTop:10,
        paddingLeft:10, 
        paddingRight:5, 
        flexDirection:'row',
        justifyContent: 'space-between',
   
    },
    snh_Icontext_con:{
        flexDirection:'row',
    },
    snh_icon_navicon:{
        flex:0, 
        marginRight:10,
        //color:'white' 
    },
    snh_appname_text:{
        color:'grey',
        fontSize:20,
        marginLeft:20,
    },
    snh_search_con:{
        flex:0, 
        alignSelf:'stretch', 
        flexDirection:'row',
        backgroundColor:'transparent' 
    },
    snh_search_input:{

    },
    snh_search_icon:{
     //color:'white'
     marginRight:10,   
    },
    snh_app_title:{
     fontSize:16,
     textAlign:'center'
    },

    /**-----------SYSTEMNAVIGATOR-------------- */
    sn_add:{height:50, width:50,
        backgroundColor:'red',
        position:'absolute',
        zIndex:12,
        bottom:20,
        left:width-60,
        alignItems:'center',
        alignContent:'center',
        borderRadius:50},
     
});

export default Styles;