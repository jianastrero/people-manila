import React from 'react';
import {
    FlatList,
    SafeAreaView, SectionList,
    StatusBar,
    StyleSheet, Text
} from 'react-native';

const DATA = [
    {
        title: 'Manila',
        data: [
            'Makati',
            'Quezon City',
            'Pasig',
            'Taguig',
            'Mandaluyong'
        ]
    },
    {
        title: 'Cebu',
        data: [
            'Cebu City',
            'Lapu-Lapu City',
            'Mandaue City',
            'Talisay City',
            'Danao City'
        ]
    },
    {
        title: 'Davao',
        data: [
            'Davao City',
            'Panabo City',
            'Tagum City',
            'Island Garden City of Samal',
            'Digos City'
        ]
    },
    {
        title: 'Cagayan de Oro',
        data: [
            'Cagayan de Oro City',
            'El Salvador City',
            'Gingoog City',
            'Iligan City',
            'Ozamiz City'
        ]
    },
    {
        title: 'Baguio',
        data: [
            'Baguio City',
            'La Trinidad',
            'Itogon',
            'Sablan',
            'Tuba'
        ]
    }
];

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="black" />
            <SectionList
                sections={DATA}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={{
                        padding: 12,
                        color: 'white',
                        backgroundColor: 'blue',
                        fontSize: 32,
                        fontWeight: 'bold'
                    }}>{title}</Text>
                )}
                renderItem={({item}) => (
                    <Text style={{
                        padding: 12,
                        borderBottomWidth: 1,
                        borderBottomColor: 'orange'
                    }}>{item}</Text>
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
