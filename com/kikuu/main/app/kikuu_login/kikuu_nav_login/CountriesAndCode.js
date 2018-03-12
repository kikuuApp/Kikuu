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
import { countriesListAction,CCSearchListAction } from "../LoginActions";
/**
 * Welcome page for the application
 */
class CountriesAndCode extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: true,
  });

  countriesScrollList = obj => {
    try {
      return obj.map((item, index) => (
        <TouchableOpacity
          key={item.country_code}
          onPress={() => {
                this.props.CCSearchListAction(item.country_name);
                this.props.navigation.goBack(null);
            }
          }
          style={Styles.reg_countries_ScrollList}>

          <Text>{item.country_name}</Text>
          <Text> {item.dialling_code} </Text>
        </TouchableOpacity>
      ));
    } catch (err) {}
  };

 manageCandCSearch(args){
    this.props.countriesListAction(args);

 }

componentDidMount(){
  this._ccSerachRef.setNativeProps({text:this.props.countriesReducer.countries !== null ?
    this.props.countriesReducer.countries[0].country_name:''})
}

  render() {
    const { lang, countriesReducer } = this.props;
    return (
      <View style={Styles.cc_code_main}>

        <TextInput 
          ref={val=>this._ccSerachRef =val}
          onChangeText={arg =>this.manageCandCSearch(arg)} />

        <ScrollView>
          {countriesReducer !== null
            ? this.countriesScrollList(countriesReducer.countries)
            : null}
        </ScrollView>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  lang: state.loginReducer.lang.lang,
  countriesReducer: state.loginReducer.countriesReducer,
});

const mapActionToProps = { countriesListAction,CCSearchListAction };
export default connect(mapStatetoProps, mapActionToProps)(CountriesAndCode);
