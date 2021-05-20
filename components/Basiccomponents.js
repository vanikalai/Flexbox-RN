import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, ScrollView } from "react-native";

class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {
          titleText: "React Native",
          bodyText: "This is Core Basic Components of React Native",
          onChangeNumber: "01233544",
          onChangeText: "dummy text"

        };
      }
  render() {
    return (
      <ScrollView>
      <View
        style={{
          flexDirection: "column",
          height: 1000,
          padding: 30
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 0.1 }} />
        <View style={{ backgroundColor: "green", flex: 0.1 }} />
        <Text style={styles.baseText}>
        <Text
          style={styles.titleText}
        >
          {this.state.titleText}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{this.state.bodyText}</Text>
      
      </Text>
      <Image
          style={styles.stretch}
          source={require('../images/native_icon.png')}
        />
         <TextInput
        style={styles.input}
        onChangeText={this.onChangeText}
        value={this.onChangeText}
      />
      <TextInput
        style={styles.input}
        onChangeText={this.onChangeNumber}
        value={this.onChangeNumber}
        placeholder="Numeric placeholder"
        keyboardType="numeric"
        multiline
      />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
        ScrollView renders all its react child components at once, but this has a performance downside.
        Imagine you have a very long list of items you want to display, maybe several screens worth of content. 
        Creating JS components and native views for everything all at once,
        much of which may not even be shown, will contribute to slow rendering and increased memory usage.
        </Text>
        </ScrollView>

      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
     
      marginTop: 16,
    paddingVertical: 8,
    borderWidth: 10,
    borderColor: "#eaeaea",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    
    },
    stretch: {
      width: 50,
      height: 50,
      resizeMode:"cover"
      
    },
    input: {
      height: 50,
      margin: 12,
      borderWidth: 1,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 22,
    },
  });

export default Basic;