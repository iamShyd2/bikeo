import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Body = ({children}) => {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.body}>{children}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  bodyContainer: {
    width: "60%",
    marginTop: 10,
  },
  body: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat"
  }
});

export default Body;
