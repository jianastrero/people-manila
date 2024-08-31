import React from 'react';
import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function App() {
    const [value, setValue] = React.useState('');
    const [switchValue, setSwitchValue] = React.useState(false);

    return (
        <SafeAreaView style={[styles.container, styles.widthFull]}>
            <StatusBar backgroundColor="black" />
            <ScrollView style={styles.widthFull}>
                <View style={styles.redBlock} />
                <Text style={styles.orangeText}>Hello, World!</Text>
                <Image
                    source={{ uri: 'https://placedog.net/720/520' }}
                    style={styles.bigImage}/>
                <TextInput
                    value={value}
                    placeholder="placeholder"
                    onChangeText={newValue => setValue(newValue)}
                    style={styles.textInput}/>
                <Button
                    title='My Button'
                    color='magenta'
                    onPress={() => {}} />
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.touchableButton}>
                    <Text>Hello World!</Text>
                </TouchableOpacity>
                <Switch
                    value={switchValue}
                    onValueChange={newSwitchValue => setSwitchValue(newSwitchValue)}
                    thumbColor='red'
                    trackColor={{
                        true: 'blue',
                        false: 'green'
                    }}/>
            </ScrollView>
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
