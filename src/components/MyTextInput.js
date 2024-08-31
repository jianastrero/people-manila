import {StyleSheet, Text, TextInput, View} from "react-native";
import {colors} from "../theme/MyTheme";
import React from "react";

export default function MyTextInput({
                                        value,
                                        onValueChange,
                                        placeholder = "",
                                        style = {}
                                    }) {
    return (
        <View>
            <Text>{placeholder}</Text>
            <TextInput
                value={value}
                onChangeText={newValue => onValueChange(newValue)}
                placeholder={placeholder}
                style={[styles.textInput, style]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.dark,
        paddingVertical: 6,
        paddingHorizontal: 16,
        marginTop: 4
    }
});
