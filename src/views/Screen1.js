import React from "react";
import Title from "../components/Title";
import Body from "../components/Body";
import {
  Image,
  Text,
} from 'react-native';

const Screen1 = () => {
  return (
    <>
      <Image
        source={require("../1.png")}
        style={{
          width: 300,
          height: 200,
          resizeMode:"cover",
          marginBottom: 20
        }}
      />
      <Title>Welcome to Bike<Text>O</Text></Title>
      <Body>A new way of commuting!</Body>
    </>
  );
}

export default Screen1;
