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
import { countriesListAction, CCSearchListAction,searchCountry } from "../LoginActions";
import KikuuIcons from '../../../utils/KikuuIcons';
/**
 * Welcome page for the application
 */
class CountriesAndCode extends Component {

  constructor(props){
    super(props);
    this.state ={
      inputCountry:''
    }
  }
  static navigationOptions = ({ navigation }) => ({
    header: false
  });

  countriesScrollList = obj => {
    try {
      //if(obj !== null){
      return obj.map((item, index) => (
        <TouchableOpacity
          key={item.country_code}
          onPress={() => {
            this.props.CCSearchListAction(item.country_name);
            this.props.navigation.goBack(null);
          }}
          style={Styles.reg_countries_ScrollList}
        >
          <Text>{item.country_name}</Text>
          <Text> {item.dialling_code} </Text>
        </TouchableOpacity>
      ));
    //}
    } catch (err) {}
  };
   
  /**Stop search and go back */
  stopSearch(){this.props.navigation.goBack(null);}
 
  /***Clear search field */
  clearSearchField(){
    this._ccSerachRef.setNativeProps({text:''});
  }

  manageCandCSearch(args) {
    //console.log('Check: '+args);
    this.props.searchCountry(args);
  }

  componentDidMount() {
    this._ccSerachRef.setNativeProps({
      text:
        this.props.countriesReducer.countries[0].country_name !== null
          ? this.props.countriesReducer.countries[0].country_name
          : ""
    });
  }

  render() {
    const { lang, countriesReducer,scReducer } = this.props;
    //alert(' countriesReducer'+JSON.stringify(countriesReducer));
    return (
      <GenericLoginScreen
        model={
          <View style={Styles.cc_code_main}>
          
          <View style={Styles.reg_tel_con_flex}>

          {/** back Stop search Icon*/}  
          <KikuuIcons iconName={'arrow-left'} 
              iconAction={()=>this.stopSearch()}
              iconSize={20} iconStyle={{marginTop:10}}/>

            {/** Search input field*/}
            <TextInput style={{flex:1, fontSize:20}}
              ref={val => (this._ccSerachRef = val)}
              onChangeText={arg => this.manageCandCSearch(arg)}
            />
            
            {/**Clear search field*/}
            <KikuuIcons iconName={'close'} 
            iconAction ={()=>this.clearSearchField()}
            iconSize={20} iconStyle={{marginTop:10}}/>
           </View>
           
            <ScrollView>
              {countriesReducer.countries !== null
                ? this.countriesScrollList(scReducer.countries)
                : null}
            </ScrollView>
          </View>
        }
      />
    );
  }
}

const mapStatetoProps = state => ({
  lang: state.loginReducer.lang.lang,
  countriesReducer: state.loginReducer.countriesReducer,
  cCInitReducer: state.loginReducer.cCInitReducer,
  scReducer: state.loginReducer.scReducer,
});

const mapActionToProps = { countriesListAction, CCSearchListAction,searchCountry };
export default connect(mapStatetoProps, mapActionToProps)(CountriesAndCode);
