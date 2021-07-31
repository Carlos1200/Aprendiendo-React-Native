import React, {useContext, useState} from 'react';
import {Platform, Switch, Text, View, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/theme/ThemeContext';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: false,
  });
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>
          Is Active
        </Text>
        <CustomSwitch
          isOn={false}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>
          Is Hungry
        </Text>
        <CustomSwitch
          isOn={false}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>Is Happy</Text>
        <CustomSwitch
          isOn={false}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={{...styles.switchText, color: colors.text}}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
