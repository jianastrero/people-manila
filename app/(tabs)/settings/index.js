import {Alert, Button, Text, View} from "react-native";
import React from "react";
import MyTextInput from "../../../src/components/MyTextInput";
import {myTheme} from "../../../src/theme/MyTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingsScreen() {
    const [firstName, setFirstName] = React.useState( '');
    const [lastName, setLastName] = React.useState('');

    React.useEffect(() => {
        AsyncStorage.getItem('first_name')
            .then(savedFirstName => setFirstName(savedFirstName))
        AsyncStorage.getItem('last_name')
            .then(savedLastName => setLastName(savedLastName))
    }, []);

    const save = () => {
        AsyncStorage.setItem('first_name', firstName);
        AsyncStorage.setItem('last_name', lastName);
    }

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
                onValueChange={newLastName => setLastName(newLastName)}
                placeholder='Last Name'
                style={myTheme.widthFull} />
            <View style={myTheme.spacer} />
            <Button
                title='Say Hi'
                onPress={() => {
                    Alert.alert('What\'s up!', "Hi " + lastName + ", " + firstName + "!")
                }} />
            <View style={myTheme.spacer} />
            <Button
                title='Save'
                onPress={() => save()} />
        </View>
    );
}