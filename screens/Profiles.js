import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

class Profiles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profiles</Text>
      </View>
    );
  }
}
export default Profiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});