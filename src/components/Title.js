import React from "react";
import {StyleSheet, Text} from "react-native";

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: "Montserrat-Bold",
    color: "#02dbd0"
  }
});
