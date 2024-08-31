import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet, TextInput
} from 'react-native';

export default function App() {
    const [value, setValue] = React.useState('');

    return (
        <SafeAreaView style={[styles.container, styles.widthFull]}>
            <StatusBar backgroundColor="black" />
            <TextInput
                value={value}
                onChangeText={newValue => setValue(newValue)}
                placeholder='TextInput with States'
                style={[styles.textInput, styles.widthFull]}/>
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
    widthFull: {
        width: '100%'
    },
    redBlock: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    orangeText: {
        fontWeight: 'bold',
        fontSize: 24,
        fontStyle: 'italic',
        color: 'orange'
    },
    bigImage: {
        width: '100%',
        height: 520
    },
    textInput: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 16
    },
    touchableButton: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 16,
        backgroundColor: 'yellow'
    }
});
