import React from 'react';
import {
    Alert,
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native';

export default function App() {
    Alert.alert('Hi, Alert', 'This is a message for the alert!');
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="black" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
