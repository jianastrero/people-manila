import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet, Text
} from 'react-native';

const DATA = [
    { id: 0, name: 'John Doe' },
    { id: 1, name: 'Jane Smith' },
    { id: 2, name: 'Alice Johnson' },
    { id: 3, name: 'Bob Brown' },
    { id: 4, name: 'Charlie Davis' },
    { id: 5, name: 'Diana Evans' },
    { id: 6, name: 'Frank Green' },
    { id: 7, name: 'Grace Harris' },
    { id: 8, name: 'Henry Jackson' },
    { id: 9, name: 'Ivy King' },
    { id: 10, name: 'John Doe' },
    { id: 11, name: 'Jane Smith' },
    { id: 12, name: 'Alice Johnson' },
    { id: 13, name: 'Bob Brown' },
    { id: 14, name: 'Charlie Davis' },
    { id: 15, name: 'Diana Evans' },
    { id: 16, name: 'Frank Green' },
    { id: 17, name: 'Grace Harris' },
    { id: 18, name: 'Henry Jackson' },
    { id: 19, name: 'Ivy King' },
    { id: 20, name: 'John Doe' },
    { id: 21, name: 'Jane Smith' },
    { id: 22, name: 'Alice Johnson' },
    { id: 23, name: 'Bob Brown' },
    { id: 24, name: 'Charlie Davis' },
    { id: 25, name: 'Diana Evans' },
    { id: 26, name: 'Frank Green' },
    { id: 27, name: 'Grace Harris' },
    { id: 28, name: 'Henry Jackson' },
    { id: 29, name: 'Ivy King' },
    { id: 30, name: 'John Doe' },
    { id: 31, name: 'Jane Smith' },
    { id: 32, name: 'Alice Johnson' },
    { id: 33, name: 'Bob Brown' },
    { id: 34, name: 'Charlie Davis' },
    { id: 35, name: 'Diana Evans' },
    { id: 36, name: 'Frank Green' },
    { id: 37, name: 'Grace Harris' },
    { id: 38, name: 'Henry Jackson' },
    { id: 39, name: 'Ivy King' },
    { id: 40, name: 'John Doe' },
    { id: 41, name: 'Jane Smith' },
    { id: 42, name: 'Alice Johnson' },
    { id: 43, name: 'Bob Brown' },
    { id: 44, name: 'Charlie Davis' },
    { id: 45, name: 'Diana Evans' },
    { id: 46, name: 'Frank Green' },
    { id: 47, name: 'Grace Harris' },
    { id: 48, name: 'Henry Jackson' },
    { id: 49, name: 'Ivy King' },
    { id: 50, name: 'John Doe' },
    { id: 51, name: 'Jane Smith' },
    { id: 52, name: 'Alice Johnson' },
    { id: 53, name: 'Bob Brown' },
    { id: 54, name: 'Charlie Davis' },
    { id: 55, name: 'Diana Evans' },
    { id: 56, name: 'Frank Green' },
    { id: 57, name: 'Grace Harris' },
    { id: 58, name: 'Henry Jackson' },
    { id: 59, name: 'Ivy King' },
    { id: 60, name: 'John Doe' },
    { id: 61, name: 'Jane Smith' },
    { id: 62, name: 'Alice Johnson' },
    { id: 63, name: 'Bob Brown' },
    { id: 64, name: 'Charlie Davis' },
    { id: 65, name: 'Diana Evans' },
    { id: 66, name: 'Frank Green' },
    { id: 67, name: 'Grace Harris' },
    { id: 68, name: 'Henry Jackson' },
    { id: 69, name: 'Ivy King' },
];

export default function App() {


    return (
        <SafeAreaView>
            <StatusBar backgroundColor="black" />
            <FlatList
                data={DATA}
                renderItem={ ({item}) => (
                    <Text style={{
                        padding: 12,
                        borderBottomWidth: 1,
                        borderBottomColor: 'orange'
                    }}>{item.name}</Text>
                )} />
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
