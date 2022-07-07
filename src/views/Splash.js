import React from "react";
import {
  View,
  Text,
  Image,
} from 'react-native';
import {styles} from "./Onboarding";

const Splash = () => {
  return(
    <View
      style={[styles.itemContainer, { backgroundColor: "#02dbd0" }]}
    >
      <Image
        source={require("../bikeO.png")}
        style={{
          width: 80,
          height: 80,
          resizeMode:"cover",
          marginBottom: 20
        }}
      />
    </View>
  )
}

export default Splash;
