import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonScreen} from '../screens/PokemonScreen';
import {SerchScreen} from '../screens/SerchScreen';
import {RootStackParams} from './TabList';

const TabSearch = createStackNavigator<RootStackParams>();

export const TabSearchScreen = () => {
  return (
    <TabSearch.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <TabSearch.Screen name="HomeScreen" component={SerchScreen} />
      <TabSearch.Screen name="PokemonScreen" component={PokemonScreen} />
    </TabSearch.Navigator>
  );
};
