import React from 'react';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';
import {myTheme, colors} from "../src/theme/MyTheme";
import MyTextInput from "../src/components/MyTextInput";
import MyButton from "../src/components/MyButton";
import {Link, router} from "expo-router";

export default function App() {
    const [inputValue, setInputValue] = React.useState('');

    return (
        <SafeAreaView style={myTheme.container}>
            <StatusBar backgroundColor={colors.primaryDark} />
            <MyTextInput
                value={inputValue}
                onValueChange={newInputValue => setInputValue(newInputValue)}
                placeholder='Placeholder from props' />
            <MyButton
                title='Go to Settings'
                onPress={() => {router.push('/settings')}}/>
            <Link href='/settings'>Go to Settings</Link>
        </SafeAreaView>
    );
}
