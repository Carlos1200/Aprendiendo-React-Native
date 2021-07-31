import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Button} from 'react-native';
import {styles, colores} from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={styles.menuHamburguesa}>
          <Icon name="menu-outline" size={50} color={colores.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text
        style={{
          marginVertical: 20,
          fontSize: 20,
          marginLeft: 5,
        }}>
        Navegar con argumentos
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Icon name="man-outline" size={40} color="white" />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria',
            })
          }>
          <Icon name="woman-outline" size={40} color="white" />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1Screen;
