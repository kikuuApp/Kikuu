import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Text,
  TouchableHighlight,
  FlatList,
} from "react-native";
import lang from "../../../../../../utils/lang";
import KikuuIcons from "../../../../../../utils/KikuuIcons";
import SystemNavigatorHeader from "../../../../SystemNavigatorHeader";
import Styles from "../../../../../../../../../resources/static/styles/KikuuStyles";
import ActivitiesModel from "./ActivitiesModel";

class ActivitiesScreen extends Component {
  // static navigationOptions =({navigation})=>({
  //     header:<SystemNavigatorHeader
  //     iconAction ={()=>navigation.navigate('Nav1')}
  //     iconStyle={{}}
  //    />,
  //    //title:  navigation.state.params.name,
  // });

  manageUserActivites( userActivites){
    try {
      console.log(userActivites)
    return (
       <FlatList
         data={userActivites}
         renderItem ={({item,separators})=>
         <ActivitiesModel
         id={item.key}
          press ={()=>alert(item.kop)}
          val ={item.kop}
           />
         }      
       />
        );
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={Styles.oneTime_Flex}>
        <ScrollView style={{ backgroundColor: "white" }}>
          {this.manageUserActivites([{kop:'66575',pop:'23',dyt:'7',key:'909'},{kop:'575',pop:'273',dyt:'47',key:'9rr9'}])}
        </ScrollView>

        <Text
          onPress={() =>
            navigate("Contacts", { name: this.props.lang.contacts })
          }
          style={Styles.sn_add}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.loginReducer.lang.lang
});

const mapActionToProps = {};
export default connect(mapStateToProps, null)(ActivitiesScreen);
