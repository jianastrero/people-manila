import React from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    SectionList,
    StatusBar,
    StyleSheet, Text
} from 'react-native';

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="black" />
            <ActivityIndicator
                color='blue'
                size='large' />
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
