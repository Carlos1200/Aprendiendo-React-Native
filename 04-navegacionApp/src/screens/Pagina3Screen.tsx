import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 3</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir al Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Pagina3Screen;
