import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {
          titleText: "React Native",
          bodyText: "This is Core Basic Components of React Native"
        };
      }
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          height: 100,
          padding: 20
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
        <Text style={styles.baseText}>
        <Text
          style={styles.titleText}
          onPress={this.onPressTitle}
        >
          {this.state.titleText}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{this.state.bodyText}</Text>
      </Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });

export default Basic;