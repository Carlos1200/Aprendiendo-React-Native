import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabIOS /> : <TabsAndroid />;
};

const ButtonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <ButtonTabAndroid.Navigator
      sceneAnimationEnabled
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'cut-outline';
              break;
            case 'Tab2Screen':
              iconName = 'game-controller-outline';
              break;
            case 'StackNavigator':
              iconName = 'leaf-outline';
              break;
          }

          return (
            <Text>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}>
      <ButtonTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <ButtonTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <ButtonTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </ButtonTabAndroid.Navigator>
  );
};

const BottonTabIOS = createBottomTabNavigator();

const TabIOS = () => {
  return (
    <BottonTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: colores.primary,
        style: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'cut-outline';
              break;
            case 'Tab2Screen':
              iconName = 'game-controller-outline';
              break;
            case 'StackNavigator':
              iconName = 'leaf-outline';
              break;
          }

          return (
            <Text>
              {' '}
              <Icon name={iconName} size={size} color={color} />
            </Text>
          );
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <BottonTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottonTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottonTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottonTabIOS.Navigator>
  );
};
