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

/**
 * Welcome page for the application
 */
class CountriesAndCode extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: false
  });

  render() {
    const { lang } = this.props;
    return (

          <View style={Styles.oneTime_Flex}>
            <ScrollView>
              <Text>List countries</Text>
            </ScrollView>
          </View>

    );
  }
}

const mapStatetoProps = state => ({
  lang: state.loginReducer.lang.lang
});

const mapActionToProps = {};
export default connect(mapStatetoProps, mapActionToProps)(CountriesAndCode);
