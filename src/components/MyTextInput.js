import {StyleSheet, TextInput} from "react-native";
import {colors} from "../theme/MyTheme";
import React from "react";

export default function MyTextInput() {
    const [value, setValue] = React.useState('');

    return (
        <TextInput
            value={value}
            onChangeText={newValue => setValue(newValue)}
            placeholder='My Text Input'
            style={styles.textInput}/>
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
