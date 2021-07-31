import React, {useRef} from 'react';
import {Button} from 'react-native';
import {View, Animated} from 'react-native';
import {useFadeHook} from '../hooks/useFadeHook';

export const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFadeHook();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          marginBottom: 10,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
        }}
      />

      <Button title="FadeIn" onPress={() => fadeIn()} />
      <Button title="FadeOut" onPress={() => fadeOut()} />
    </View>
  );
};
