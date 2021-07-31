import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabList} from './TabList';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TabSearchScreen} from './TabSearchScreen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: '#5856D6',
        labelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        style: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 0 : 60,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={30} name="list-outline" />
          ),
        }}
        component={TabList}
      />
      <Tab.Screen
        name="TabSearchScreen"
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={30} name="search-outline" />
          ),
        }}
        component={TabSearchScreen}
      />
    </Tab.Navigator>
  );
};
