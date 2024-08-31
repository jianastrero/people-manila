import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors, myTheme} from "../../../src/theme/MyTheme";
import React from "react";
import Icon from "../../../src/components/Icon";
import {router, useFocusEffect} from "expo-router";

export default function PeopleScreen() {
    let [people, setPeople] = React.useState([]);
    let [isFocused, setIsFocused] = React.useState(false);

    useFocusEffect(() => {
        if (!isFocused) {
            fetch("https://bootcamp-api-resource.onrender.com/people")
                .then(response => response.json())
                .then(fetchedPeople => {
                    console.log(fetchedPeople.length)
                    setPeople(fetchedPeople);
                });
        }

        setIsFocused(true);
        return () => {
            setIsFocused(false)
        };
    });

    const deletePerson = (personId) => {
        fetch(`https://bootcamp-api-resource.onrender.com/people/delete/${personId}`, {
            method: 'POST'
        });
        const newPeople = people.filter(item => item.id !== personId);
        setPeople(newPeople);
    };

    return (
        <View style={[myTheme.container, { padding: 0 }]}>
            <FlatList
                data={people}
                renderItem={({item}) => (
                    <PersonItem
                        item={item}
                        onDelete={() => deletePerson(item.id)} />
                )} />
        </View>
    );
}

function PersonItem({ item, onDelete }) {
    return (
        <TouchableOpacity
            onPress={() => router.push(`/person/${item.id}`)}
            style={[styles.personContainer, myTheme.horizontal, myTheme.center]}>
            <View style={myTheme.flex1}>
                <Text style={styles.name}>{item.name}, {item.age}</Text>
                <Text style={styles.address}>{item.streetAddress}, {item.barangay}, {item.city}, {item.province}, {item.country}</Text>
            </View>
            <Icon
                source={require('../../../assets/icons/ic_delete.png')}
                tintColor={colors.error}
                onPress={() => onDelete()}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    personContainer: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomColor: colors.ltgray,
        borderBottomWidth: 1
    },
    name: {
        color: colors.dark,
        fontSize: 24,
        fontWeight: 'bold'
    },
    address: {
        color: colors.gray,
        fontSize: 14,
    }
});