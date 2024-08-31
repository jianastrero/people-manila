import React from 'react';
import {StatusBar, View} from 'react-native';
import {myTheme, colors} from "../../src/theme/MyTheme";
import {Gesture, GestureDetector, GestureHandlerRootView} from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';

export default function App() {
    const imageTap = Gesture.Tap()
        .onBegin(() => console.log('Tap onBegin'))
        .onTouchesDown(() => console.log('Tap onTouchesDown'))
        .onTouchesMove(() => console.log('Tap onTouchesMove'))
        .onTouchesUp(() => console.log('Tap onTouchesUp'))
        .onTouchesCancelled(() => console.log('Tap onTouchesCancelled'))
        .onStart(() => console.log('Tap onStart'))
        .onEnd(() => console.log('Tap onEnd'))
        .onFinalize(() => console.log('Tap onFinalize ----------------'));

    const imageLongPress = Gesture.LongPress()
        .onBegin(() => console.log('LongPress onBegin'))
        .onTouchesDown(() => console.log('LongPress onTouchesDown'))
        .onTouchesMove(() => console.log('LongPress onTouchesMove'))
        .onTouchesUp(() => console.log('LongPress onTouchesUp'))
        .onTouchesCancelled(() => console.log('LongPress onTouchesCancelled'))
        .onStart(() => console.log('LongPress onStart'))
        .onEnd(() => console.log('LongPress onEnd'))
        .onFinalize(() => console.log('LongPress onFinalize ----------------'));

    const imagePan = Gesture.Pan()
        .onBegin(() => console.log('Pan onBegin'))
        .onTouchesDown(() => console.log('Pan onTouchesDown'))
        .onTouchesMove(() => console.log('Pan onTouchesMove'))
        .onTouchesUp(() => console.log('Pan onTouchesUp'))
        .onTouchesCancelled(() => console.log('Pan onTouchesCancelled'))
        .onStart(() => console.log('Pan onStart'))
        .onEnd(() => console.log('Pan onEnd'))
        .onFinalize(() => console.log('Pan onFinalize ----------------'));

    const imagePinch = Gesture.Pinch()
        .onBegin(() => console.log('Pinch onBegin'))
        .onTouchesDown(() => console.log('Pinch onTouchesDown'))
        .onTouchesMove(() => console.log('Pinch onTouchesMove'))
        .onTouchesUp(() => console.log('Pinch onTouchesUp'))
        .onTouchesCancelled(() => console.log('Pinch onTouchesCancelled'))
        .onStart(() => console.log('Pinch onStart'))
        .onEnd(() => console.log('Pinch onEnd'))
        .onFinalize(() => console.log('Pinch onFinalize ----------------'));

    return (
        <GestureHandlerRootView>
            <StatusBar backgroundColor={colors.error} />
            <View style={myTheme.container}>
                <GestureDetector gesture={imageTap}>
                    <Animated.Image
                        source={{ uri: 'https://placedog.net/200/200' }}
                        style={{ width: 150, height: 150 }}/>
                </GestureDetector>
                <View style={myTheme.spacer}/>
                <GestureDetector gesture={imageLongPress}>
                    <Animated.Image
                        source={{ uri: 'https://placedog.net/300/300' }}
                        style={{ width: 150, height: 150 }}/>
                </GestureDetector>
                <View style={myTheme.spacer}/>
                <GestureDetector gesture={imagePan}>
                    <Animated.Image
                        source={{ uri: 'https://placedog.net/400/400' }}
                        style={{ width: 150, height: 150 }}/>
                </GestureDetector>
                <View style={myTheme.spacer}/>
                <GestureDetector gesture={imagePinch}>
                    <Animated.Image
                        source={{ uri: 'https://placedog.net/500/500' }}
                        style={{ width: 150, height: 150 }}/>
                </GestureDetector>
            </View>
        </GestureHandlerRootView>
    );
}
