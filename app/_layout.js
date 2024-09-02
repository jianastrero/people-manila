import {Stack} from "expo-router";
import {colors} from "../src/theme/MyTheme";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='(tabs)'
                options={{
                    headerShown: false,
                    headerTitle: 'Main'
                }}/>
            <Stack.Screen
                name='person/[id]'
                options={{
                    title: 'Person Details',
                    headerStyle: {
                        backgroundColor: colors.primary
                    },
                }} />
        </Stack>
    );
}