import {StyleSheet} from "react-native";

export const colors = {
    primary: '#48CFCB',
    primaryDark: '#229799',
    dark: '#424242',
    light: '#F5F5F5',
};

export const myTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    },
    horizontal: {
        flexDirection: 'row'
    },
    vertical: {
        flexDirection: 'column'
    },
    textInput: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.dark,
        paddingVertical: 12,
        paddingHorizontal: 24
    }
});