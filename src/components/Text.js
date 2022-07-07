import React from "react";
import {StyleSheet, Text} from "react-native";

const T = ({children, style, ...others}) => {
  return (
    <Text style={[styles.text, style]} {...others}>{children}</Text>
  );
}

export default T;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat-Regular",
    color: "#02dbd0"
  }
});
