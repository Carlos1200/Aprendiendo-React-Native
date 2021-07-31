import React, {useContext, useState} from 'react';
import {
  Animated,
  View,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color={colors.primary}
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeIn();
          setIsLoading(false);
        }}
        style={{...(style as any), opacity}}
      />
    </View>
  );
};
