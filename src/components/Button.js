import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";

const Button = ({style, children}) => {
    return(
        <TouchableOpacity style={[styles.button, style]}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
      marginTop: 30,
      backgroundColor: "#02dbd0",
      paddingHorizontal: 20,
      paddingVertical: 18,
      borderRadius: 40,
    },
    buttonText: {
      color: "#fff",
      fontFamily: "Montserrat-Bold",
      textAlign: "center"
    }
  });
  

export default Button;