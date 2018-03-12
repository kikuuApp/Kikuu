import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { Button } from "react-native-elements";
import Styles from "../../../../../../resources/static/styles/KikuuStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import GenericLoginScreen from "../../../utils/GenericLoginScreen";
import countryCodes from "../../../../../../resources/static/ccodes";
import { countriesListAction, CCSearchListAction } from "../LoginActions";

/**
 * Welcome page for the application
 */
class Welcome extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: false
  });

  moveToLogfinTel(){
     this.props.navigation.navigate("LoginTel");
     this.props.CCSearchListAction();
  }
  render() {
    const { lang } = this.props;
    return (
      <GenericLoginScreen
        model={
          <View style={Styles.oneTime_Flex}>
            <ScrollView />
            
            {/**Application privicy text*/}
            <Text>{lang.reg_privicy_text}</Text>

            <TouchableOpacity
              style={Styles.reg_continue}
              onPress={() =>this.moveToLogfinTel() }
            >
              <Text style={Styles.reg_continueText}>{lang.reg_agree}</Text>
            </TouchableOpacity>
          </View>
        }
      />
    );
  }
}

const mapStatetoProps = state => ({
  lang: state.loginReducer.lang.lang,
  countriesReducer: state.loginReducer.countriesReducer,
});

const mapActionToProps = {countriesListAction, CCSearchListAction};
export default connect(mapStatetoProps, mapActionToProps)(Welcome);
