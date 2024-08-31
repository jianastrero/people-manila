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
        padding: 12
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
    widthFull: {
        width: '100%',
    },
    h1: {
        color: colors.dark,
        fontWeight: 'black',
        fontSize: 24,
    }
});