import {Image, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

export default function Icon({ source, tintColor, onPress, style }) {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <Image
                source={source}
                tintColor={tintColor}
                style={[styles.icon, style]} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32
    }
});