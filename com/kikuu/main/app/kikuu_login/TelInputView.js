import React, { Component } from "react";
import { connect } from "react-redux";
import { View, 
         Text,
         TouchableOpacity,
         TextInput, 
         KeyboardAvoidingView } from "react-native";

class TelInputview extends Component {
  render() {
    const{lang} = this.props;
    return (
      <KeyboardAvoidingView style={{alignSelf:'stretch', backgroundColor:'rgba(117, 125, 138, .6)',padding:10}}>
        <Text >{lang}..error view</Text>
        <TextInput
          placeholder={lang} 
          onChangeText={this.props.telephone}
        />
        <TouchableOpacity style={{backgroundColor:'rgba(rgba(9, 120, 223, 0.7))',
           padding:12, alignItems:'center'}}>
          <Text>{lang} Continue</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const mapStatetoProps = state=>({
    lang : state.lang,
})

const mapActiontoProps ={}

export default connect(mapStatetoProps,mapActiontoProps)(TelInputview);