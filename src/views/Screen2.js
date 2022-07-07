import React from "react";
import Title from "../components/Title";
import Body from "../components/Body";
import {
  Image,
} from 'react-native';

const Screen2 = () => {
  return (
    <>
      <Image
        source={require("../3.png")}
        style={{
          width: 300,
          height: 176,
          resizeMode:"cover",
          marginBottom: 20
        }}
      />
      <Title>Save Money on Fuel</Title>
      <Body>We provide a cheaper way of moving around!</Body>
    </>
  );
}

export default Screen2;
