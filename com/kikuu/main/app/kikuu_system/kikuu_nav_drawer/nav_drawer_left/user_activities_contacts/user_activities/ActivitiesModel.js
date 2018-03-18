import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

/**
 * ActivitiesModel is the model signature for
 * User models
 * @link ActivitiesModel
 */
class ActivitiesModel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
      id={this.props.id}
      style={{
        alignSelf: "stretch",
        flexDirection: "row",
        flex: 1,
        backgroundColor: "grey",
        marginBottom: 4,
        marginTop: 4,
        padding:5,
        height:50,
      }}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={this.props.press}>
          <Text > first 1 </Text>
          <Text > {this.props.val} </Text>
          <Text > third 3 </Text>
        </TouchableOpacity>
        <View style={{ flex: 2, backgroundColor:'pink' }}>

        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.loginReducer.lang.lang
});
const mapActionsToProps = {};
export default connect(mapStateToProps, mapActionsToProps)(ActivitiesModel);
