import {ScrollView, Text, View} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import React from "react";
import MyTextInput from "../../src/components/MyTextInput";
import {myTheme} from "../../src/theme/MyTheme";
import MyButton from "../../src/components/MyButton";

export default function PersonScreen() {
    const { id } = useLocalSearchParams();

    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [streetAddress, setStreetAddress] = React.useState('');
    const [barangay, setBarangay] = React.useState('');
    const [city, setCity] = React.useState('');
    const [province, setProvince] = React.useState('');
    const [country, setCountry] = React.useState('');

    const ageRef = React.useRef(null);
    const streetAddressRef = React.useRef(null);
    const barangayRef = React.useRef(null);
    const cityRef = React.useRef(null);
    const provinceRef = React.useRef(null);
    const countryRef = React.useRef(null);

    React.useEffect(() => {
        if (Number(id) === -1) return;

        fetch(`https://bootcamp-api-resource.onrender.com/people/${id}`)
            .then(response => response.json())
            .then(person => {
                setName(person.name);
                setAge(String(person.age));
                setStreetAddress(person.streetAddress);
                setBarangay(person.barangay);
                setCity(person.city);
                setProvince(person.province);
                setCountry(person.country);
            });

    }, []);

    const save = () => {
        if (Number(id) === -1) {
            // New
            fetch(`https://bootcamp-api-resource.onrender.com/people/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    age: Number(age),
                    streetAddress: streetAddress,
                    barangay: barangay,
                    city: city,
                    province: province,
                    country: country
                })
            }).then(response => response.json()).then(data => {
                console.log(data);
                router.back();
            });
        } else {
            // Edit
            fetch(`https://bootcamp-api-resource.onrender.com/people/update/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    age: Number(age),
                    streetAddress: streetAddress,
                    barangay: barangay,
                    city: city,
                    province: province,
                    country: country
                })
            }).then(response => response.json()).then(data => {
                console.log(data);
                router.back();
            });
        }
    };

    return (
        <ScrollView style={myTheme.container}>
            <MyTextInput
                value={name}
                onValueChange={setName}
                placeholder='Person Name'
                onReturnKey={() => ageRef.current.focus()}
                style={myTheme.widthFull} />
            <View style={myTheme.spacer} />
            <MyTextInput
                myRef={ageRef}
                value={age}
                onValueChange={setAge}
                placeholder='Person Age'
                onReturnKey={() => streetAddressRef.current.focus()}
                isNumeric={true}
                style={myTheme.widthFull} />
            <View style={myTheme.spacer} />
            <MyTextInput
                myRef={streetAddressRef}
                value={streetAddress}
                onValueChange={setStreetAddress}
                placeholder='Street Address'
                onReturnKey={() => barangayRef.current.focus()}
                style={myTheme.widthFull} />
            <View style={myTheme.spacer} />
            <MyTextInput
                myRef={barangayRef}
                value={barangay}
                onValueChange={setBarangay}
                onReturnKey={() => cityRef.current.focus()}
                placeholder='Barangay'
                style={myTheme.widthFull} />
            <View style={myTheme.spacer} />
            <MyTextInput
                myRef={cityRef}
                value={city}
                onValueChange={setCity}
                placeholder='City'
                onReturnKey={() => provinceRef.current.focus()}
                style={myTheme.widthFull} />
            <View style={myTheme.spacer} />
            <MyTextInput
                myRef={provinceRef}
                value={province}
                onValueChange={setProvince}
                placeholder='Province'
                onReturnKey={() => countryRef.current.focus()}
                style={myTheme.widthFull} />
            <View style={myTheme.spacer} />
            <MyTextInput
                myRef={countryRef}
                value={country}
                onValueChange={setCountry}
                placeholder='Country'
                returnKeyType='done'
                style={myTheme.widthFull} />
            <View style={myTheme.spacer} />
            <MyButton
                title='Save Person'
                onPress={() => save()} />
            <View style={myTheme.spacerLarge} />
        </ScrollView>
    );
}