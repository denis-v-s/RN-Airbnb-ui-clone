import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

class Tag extends Component {
  render() {
    return (
      <View
        style={{
          minHeight: 20, minWidth: 40,
          padding: 5, marginRight: 5,
          backgroundColor: 'white',
          borderColor: '#ddd',
          borderWidth: 1,
          borderRadius: 2
        }}>
        <Text style={{ fontSize: 10, fontWeight: '700' }}>{this.props.text}</Text>
      </View>
    );
  }
}
export default Tag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});