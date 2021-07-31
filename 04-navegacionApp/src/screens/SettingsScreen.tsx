import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores, styles} from '../theme/appTheme';
import {AuthContext, AuthState} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 3)}</Text>

      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={80} color={colores.primary} />
      )}
    </View>
  );
};
