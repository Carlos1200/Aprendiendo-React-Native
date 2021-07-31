import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxObjetModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Objet Model</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginHorizontal: 10,
    marginTop: 20,
    fontSize: 20,
    // width: 250,
    borderWidth: 10,
    // backgroundColor: 'red',
  },
});
export default BoxObjetModelScreen;
