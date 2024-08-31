import {StyleSheet, TextInput} from "react-native";
import {colors} from "../theme/MyTheme";
import React from "react";

export default function MyTextInput({
                                        value,
                                        onValueChange,
                                        placeholder = "",
                                        style = {}
                                    }) {
    return (
        <TextInput
            value={value}
            onChangeText={newValue => onValueChange(newValue)}
            placeholder={placeholder}
            style={[styles.textInput, style]}/>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.dark,
        paddingVertical: 6,
        paddingHorizontal: 16
    }
});
