import React from "react";
import Title from "../components/Title";
import Body from "../components/Body";
import {
  Image,
  StyleSheet,
} from 'react-native';
import Button from "../components/Button";
import { RFPercentage } from "react-native-responsive-fontsize";

const Screen3 = () => {
  return(
    <>
      <Image
        source={require("../2.png")}
        style={{
          width: 200,
          height: 200,
          resizeMode:"cover",
          marginBottom: 20
        }}
      />
      <Title>Get there on Time</Title>
      <Body>Avoid traffic to meet your buddies on time!</Body>
      <Button style={styles.button}>Get Started</Button>
    </>
  )
}

const styles = new StyleSheet.create({
  button: {
    position: "absolute",
    bottom: RFPercentage(10),
  }
})

export default Screen3;
