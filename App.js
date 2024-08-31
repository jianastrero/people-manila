import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet, TextInput
} from 'react-native';
import {colors, myTheme} from "./src/theme/MyTheme";

export default function App() {
    const [value, setValue] = React.useState('');

    return (
        <SafeAreaView style={myTheme.container}>
            <StatusBar backgroundColor={colors.primaryDark} />
            <TextInput
                value={value}
                onChangeText={newValue => setValue(newValue)}
                placeholder='TextInput with States'
                style={myTheme.textInput}/>
        </SafeAreaView>
    );
}
