import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class App extends Component {
  /**
   * @author Vaibhav Padalia
   * @description When the button is pressed the error is explicitly thrown.
   */
  throwError() {
    console.warn("Here");
    throw new Error("A simple error throw from: throwError() ");
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Crashlytics!</Text>
        <Text style={styles.instructions}>This is done using Sentry</Text>
        <TouchableOpacity style={{ backgroundColor: "blue", padding: 5, borderRadius: 5 }} onPress={() => this.throwError()}>
          <Text style={styles.instructions}>{"Press Here to throw an error"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "white",
    marginBottom: 5
  }
});
