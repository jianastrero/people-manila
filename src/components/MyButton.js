import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {colors} from "../theme/MyTheme";

export default function MyButton() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Click me!</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: colors.primary,
        borderRadius: 100,
        shadowColor: colors.dark,
        elevation: 4
    },
    buttonText: {
        color: colors.light,
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase'
    }
});
