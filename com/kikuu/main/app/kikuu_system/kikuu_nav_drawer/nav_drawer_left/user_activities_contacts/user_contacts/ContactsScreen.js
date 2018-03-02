import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text,ScrollView } from "react-native";
import lang from '../../../../../../utils/lang';
import KikuuIcons from '../../../../../../utils/KikuuIcons';
import SystemNavigatorHeader from "../../../../SystemNavigatorHeader";
import Styles from "../../../../../../../../../resources/static/styles/KikuuStyles";
/**
 * Contact Tab screen
 */
class ContactsScreen extends Component {
  constructor(props) {
    super(props);
  }

  // static navigationOptions = ({ navigation }) => ({
  //   header: (
  //     <SystemNavigatorHeader iconAction={() => alert("42342")} iconStyle={{}} />
  //   )
  // });

  render() {
    return (
      <View style={Styles.oneTime_Flex}>

        <ScrollView style={{ backgroundColor: "pink" }}>
          <Text>contact screen</Text>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.loginReducer.lang.lang
});

const mapActionToProps = {};
export default connect(mapStateToProps, null)(ContactsScreen);
