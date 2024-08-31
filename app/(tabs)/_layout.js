import {router, Tabs} from "expo-router";
import {colors} from "../../src/theme/MyTheme";
import Icon from "../../src/components/Icon";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{ title: 'Home' }} />
            <Tabs.Screen name='people/index' options={{
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
                )
            }} />
            <Tabs.Screen name='settings/index' options={{ title: 'Settings' }} />
        </Tabs>
    );
}