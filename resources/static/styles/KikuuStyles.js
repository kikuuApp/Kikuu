import {StyleSheet} from 'react-native';


const Styles = StyleSheet.create({
    


    /**
     * GenericLoginScreen Component
     */

    /**SafeAreaView */
    gen_ls_con:{flex: 1, alignSelf: "stretch" },
    
    /**ImageBackground */
    gen_ls_bg_con:{
        backgroundColor: "#F5FCFF",
        flex:1,
        alignItems: 'center',
      
    },
    
    /**Image */
    gen_ls_AppIcon:{ 
        width: 60,
        height: 60, 
        top:20, 
        flexDirection: "row-reverse" 
    },

    /**View container for model */
    gen_ls_model:{
        flex:1, 
        alignSelf:'stretch',
        justifyContent:'center',
        padding:50
    },

    /**
     * Registration view css
     */
/*-----------------Registration view------------------------------*/
    /**keyboradAvoidingView */
    reg_input_con:{alignSelf:'stretch',padding:10}, 

    /**Text */
    reg_instruction:{
        backgroundColor:'rgba(117, 125, 138, .6)',
        padding:10,marginBottom:20
    },

    /**TextInput for reg telepnoe numbers*/            
    reg_tel_input:{
        alignSelf:'stretch',
        flex:1
    },  
     
    /**TouchableOpacity button container */
    reg_continue:{
        backgroundColor:'rgba(rgba(9, 120, 223, 0.7))',
        padding:12, alignItems:'center',
        
    }, 

    reg_icon_flex:{
       flexDirection:'row',
    },
    reg_tel_icon_flex:{
        flexDirection:'row',
        backgroundColor:'rgba(255,255,255,0.5)',
        marginBottom:10,
        paddingLeft:10,
     }  
});

export default Styles;