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

import {countriesListAction} from '../LoginActions';
/**
 * Welcome page for the application
 */
class CountriesAndCode extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: false
  });

  countriesScrollList = obj => {
    return obj.map((item, index) => (
      <TouchableOpacity key={item.country_code} 
      onPress={() => { alert(item.country_name)}}
      style={Styles.reg_countries_ScrollList}>
        <Text>
          {item.country_name}
        </Text>
        <Text> {item.dialling_code} </Text>
      </TouchableOpacity>
    ));
  };


  render() {
    const { lang,countriesReducer} = this.props;
    return (

          <View style={Styles.cc_code_main}>
          <TextInput onChangeText={ (arg) =>this.props.countriesListAction(arg)}/>
            <ScrollView>
              {countriesReducer ? this.countriesScrollList(countriesReducer.countries):null}
            </ScrollView>
          </View>

    );
  }
}

const mapStatetoProps = state => ({
  lang: state.loginReducer.lang.lang,
  countriesReducer: state.loginReducer.countriesReducer,
});

const mapActionToProps = {countriesListAction};
export default connect(mapStatetoProps, mapActionToProps)(CountriesAndCode);
