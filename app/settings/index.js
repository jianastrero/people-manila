import {Text, View} from "react-native";
import MyButton from "../../src/components/MyButton";
import {router} from "expo-router";

export default function SettingsScreen() {
    return (
        <View>
            <Text>Settings Screen</Text>
            <MyButton
                title='Go Back'
                onPress={() => router.back()} />
        </View>
    );
}