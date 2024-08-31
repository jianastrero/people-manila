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
        <SafeAreaView>
            <StatusBar backgroundColor="black" />
            <ScrollView>
                <View style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'red'
                }} />
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 24,
                        fontStyle: 'italic',
                        color: 'orange'
                    }}>Hello, World!</Text>
                <Image
                    source={{ uri: 'https://placedog.net/720/520' }}
                    style={{
                        width: '100%',
                        height: 520
                    }}/>
                <TextInput
                    value={value}
                    placeholder="placeholder"
                    onChangeText={newValue => setValue(newValue)}
                    style={{
                        paddingHorizontal: 24,
                        paddingVertical: 12,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 16
                    }}/>
                <Button
                    title='My Button'
                    color='magenta'
                    onPress={() => {}} />
                <TouchableOpacity
                    onPress={() => {}}
                    style={{
                        paddingHorizontal: 24,
                        paddingVertical: 12,
                        borderRadius: 16,
                        backgroundColor: 'yellow'
                    }}>
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
});
