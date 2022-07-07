import React from "react";
import {
    StyleSheet,
} from "react-native";
import {
    TextInput as RTextInput
} from "react-native-paper";

const TextInput = (props) => {
    return(
        <RTextInput
            style={style.textInput}
            mode="outlined"
            theme={{
                roundness: 10,
            }}
            outlineColor="#E8E8E8"
            {...props}
        />
    )
}

const style = new StyleSheet.create({
    textInput: {
        marginVertical: 10,
        backgroundColor: "#F8F8F8",
    }
})

export default TextInput;