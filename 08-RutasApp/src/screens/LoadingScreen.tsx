import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

export const LoadingScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView source={require('../assets/loading.json')} autoPlay loop />
    </View>
  );
};
