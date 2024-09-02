import {router, Tabs} from "expo-router";
import {colors} from "../../src/theme/MyTheme";
import Icon from "../../src/components/Icon";
import {Image, TouchableOpacity} from "react-native";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({focused, color, size}) => (
                        <Image
                            source={require('../../assets/icons/ic_home.png')}
                            tintColor={color}
                            style={{
                                width: size,
                                height: size
                            }} />
                    )
                }}/>
            <Tabs.Screen
                name='people/index'
                options={{
                title: 'People',
                headerTintColor: colors.light,
                headerStyle: {
                    backgroundColor: colors.primaryDark
                },
                headerRight: () => (
                    <Icon
                        source={require('../../assets/icons/ic_add.png')}
                        onPress={() => router.push('/person/-1')}
                        style={{marginEnd: 16}} />
                ),
                tabBarIcon: ({focused, color, size}) => (
                    <Image
                        source={require('../../assets/icons/ic_people.png')}
                        tintColor={color}
                        style={{
                            width: size,
                            height: size
                        }} />
                )
                }} />
            <Tabs.Screen
                name='settings/index'
                options={{
                    title: 'Settings',
                    tabBarIcon: ({focused, color, size}) => (
                        <Image
                            source={require('../../assets/icons/ic_settings.png')}
                            tintColor={color}
                            style={{
                                width: size,
                                height: size
                            }} />
                    )
                }} />
        </Tabs>
    );
}