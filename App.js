import React from 'react';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';
import {colors, myTheme} from "./src/theme/MyTheme";
import MyTextInput from "./src/components/MyTextInput";

export default function App() {
    return (
        <SafeAreaView style={myTheme.container}>
            <StatusBar backgroundColor={colors.primaryDark} />
            <MyTextInput />
        </SafeAreaView>
    );
}
