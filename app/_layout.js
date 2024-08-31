import {Stack} from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'red',
                    }
                }}/>
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Settings',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'blue',
                    }
                }} />
        </Stack>
    );
}