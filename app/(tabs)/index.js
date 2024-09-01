import React from 'react';
import {StatusBar, View} from 'react-native';
import {myTheme, colors} from "../../src/theme/MyTheme";
import {Gesture, GestureDetector, GestureHandlerRootView} from "react-native-gesture-handler";
import Animated, {Easing, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';

export default function App() {
    const tapSize = useSharedValue(150);
    const longPressSize = useSharedValue(150);
    const panTranslationX = useSharedValue(0);
    const panTranslationY = useSharedValue(0);
    const pinchScale = useSharedValue(1);

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0, 0.5, 1)
    };
    const instantConfig = {
        duration: 1,
        easing: Easing.linear
    };

    const tapStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(tapSize.value, config),
            height: withTiming(tapSize.value, config)
        }
    });

    const longPressStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(longPressSize.value, config),
            height: withTiming(longPressSize.value, config)
        }
    });

    const panStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(panTranslationX.value, instantConfig),
                },
                {
                    translateY: withTiming(panTranslationY.value, instantConfig),
                }
            ]
        }
    });

    const pinchStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: withTiming(pinchScale.value, instantConfig),
                },
            ]
        }
    });

    const imageTap = Gesture.Tap()
        .onStart(() => {
            if (tapSize.value === 150) {
                tapSize.value = 200;
            } else {
                tapSize.value = 150;
            }
        });

    const imageLongPress = Gesture.LongPress()
        .onStart(() => {
            if (longPressSize.value === 150) {
                longPressSize.value = 100;
            } else {
                longPressSize.value = 150;
            }
        });

    const imagePan = Gesture.Pan()
        .onUpdate((event) => {
            panTranslationX.value = event.translationX;
            panTranslationY.value = event.translationY;
        })
        .onFinalize(() => {
            panTranslationX.value = 0;
            panTranslationY.value = 0;
        });

    const imagePinch = Gesture.Pinch()
        .onUpdate((event) => {
            pinchScale.value = event.scale;
        })
        .onFinalize(() => {
            pinchScale.value = 1;
        });

    return (
        <GestureHandlerRootView>
            <StatusBar backgroundColor={colors.error} />
            <View style={myTheme.container}>
                <GestureDetector gesture={imageTap}>
                    <Animated.Image
                        source={{ uri: 'https://placedog.net/200/200' }}
                        style={[{ width: 150, height: 150 }, tapStyle]}/>
                </GestureDetector>
                <View style={myTheme.spacer}/>
                <GestureDetector gesture={imageLongPress}>
                    <Animated.Image
                        source={{ uri: 'https://placedog.net/300/300' }}
                        style={[{ width: 150, height: 150 }, longPressStyle]}/>
                </GestureDetector>
                <View style={myTheme.spacer}/>
                <GestureDetector gesture={imagePan}>
                    <Animated.Image
                        source={{ uri: 'https://placedog.net/400/400' }}
                        style={[{ width: 150, height: 150 }, panStyle]}/>
                </GestureDetector>
                <View style={myTheme.spacer}/>
                <GestureDetector gesture={imagePinch}>
                    <Animated.Image
                        source={{ uri: 'https://placedog.net/500/500' }}
                        style={[{ width: 150, height: 150 }, pinchStyle]}/>
                </GestureDetector>
            </View>
        </GestureHandlerRootView>
    );
}
