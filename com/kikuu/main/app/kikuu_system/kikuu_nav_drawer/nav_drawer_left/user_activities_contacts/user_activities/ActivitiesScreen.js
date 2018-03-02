import React, { Component } from "react";
import { connect } from "react-redux";
import { View,
       TouchableOpacity, 
        ScrollView,
        Dimensions,
        Text } from "react-native";
import lang from '../../../../../../utils/lang';
import KikuuIcons from '../../../../../../utils/KikuuIcons';
import SystemNavigatorHeader from "../../../../SystemNavigatorHeader";
import Styles from "../../../../../../../../../resources/static/styles/KikuuStyles";

class ActivitiesScreen extends Component {

  // static navigationOptions =({navigation})=>({
  //     header:<SystemNavigatorHeader
  //     iconAction ={()=>navigation.navigate('Nav1')}
  //     iconStyle={{}}
  //    />,
  //    //title:  navigation.state.params.name,
  // });

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={Styles.oneTime_Flex}>

        <ScrollView style={{backgroundColor:'blue'}}>
           <Text>Activity screen</Text>
        </ScrollView>

        <Text 
        onPress={()=>navigate('Contacts',{name:this.props.lang.contacts})}
        style={Styles.sn_add}>
        
        </Text>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.loginReducer.lang.lang,
});

const mapActionToProps = {};
export default connect(mapStateToProps, null)(ActivitiesScreen);
