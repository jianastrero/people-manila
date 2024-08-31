import {Alert, Button, Text, View} from "react-native";
import React from "react";
import MyTextInput from "../../../src/components/MyTextInput";
import {myTheme} from "../../../src/theme/MyTheme";

export default function SettingsScreen() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastNameName] = React.useState('');

    return (
        <View style={myTheme.container}>
            <Text style={myTheme.h1}>Hello there, {firstName} {lastName}</Text>
            <View style={myTheme.spacer} />
            <MyTextInput
                value={firstName}
                onValueChange={newFirstName => setFirstName(newFirstName)}
                placeholder='First Name'
                style={myTheme.widthFull} />
            <View style={myTheme.spacer} />
            <MyTextInput
                value={lastName}
                onValueChange={newLastName => setLastNameName(newLastName)}
                placeholder='Last Name'
                style={myTheme.widthFull} />
            <View style={myTheme.spacer} />
            <Button
                title='Say Hi'
                onPress={() => {
                    Alert.alert('What\'s up!', "Hi " + lastName + ", " + firstName + "!")
                }} />
        </View>
    );
}