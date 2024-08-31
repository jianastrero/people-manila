import {StyleSheet} from "react-native";

export const colors = {
    primary: '#48CFCB',
    primaryDark: '#229799',
    dark: '#424242',
    light: '#F5F5F5',
    ltgray: '#CFCFCF',
    gray: '#888888',
    error: '#FF295A'
};

export const myTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
        padding: 12
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex1: {
        flex: 1,
    },
    horizontal: {
        flexDirection: 'row'
    },
    vertical: {
        flexDirection: 'column'
    },
    spacer: {
        width: 16,
        height: 16
    },
    spacerLarge: {
        width: 32,
        height: 32
    },
    widthFull: {
        width: '100%',
    },
    h1: {
        color: colors.dark,
        fontWeight: 'black',
        fontSize: 24,
    },
    icon: {
        width: 32,
        height: 32,
    }
});