import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {dark, colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />

      <TouchableOpacity
        onPress={() => {
          if (dark) {
            setLightTheme();
          } else {
            setDarkTheme();
          }
        }}
        activeOpacity={0.8}
        style={{
          backgroundColor: colors.primary,
          justifyContent: 'center',
          width: 150,
          height: 50,
          borderRadius: 20,
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 23}}>
          Light/ Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};
