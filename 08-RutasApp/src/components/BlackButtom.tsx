import React from 'react';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const BlackButtom = ({title, onPress, style = {}}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        ...(style as any),
        ...styles.blackButtom,
      }}>
      <Text style={styles.buttomText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  blackButtom: {
    height: 50,
    width: 200,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    elevation: 6,
  },
  buttomText: {
    color: 'white',
    fontSize: 18,
  },
});
