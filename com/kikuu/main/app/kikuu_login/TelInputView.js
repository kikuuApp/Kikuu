import React, { Component } from "react";
import { connect } from "react-redux";
import { View, 
         Text,
         TextInput, 
         KeyboardAvoidingView } from "react-native";

class TelInputview extends Component {
  render() {
    const{lang} = this.props;
    return (
      <KeyboardAvoidingView>
        <Text>{lang}..error view</Text>
        <TextInput
          placeholder={lang} 
          onChangeText={this.props.telephone}
        />
        <View>
          <Text>{lang} ..login</Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const mapStatetoProps = state=>({
    lang : state.lang,
})

const mapActiontoProps ={}

export default connect(mapStatetoProps,mapActiontoProps)(TelInputview);