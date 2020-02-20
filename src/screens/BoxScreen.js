import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200
  },
  textOneStyle: {
    borderWidth: 1,
    backgroundColor: 'red',
    flex: 1
  },
  textTwoStyle: {
    borderWidth: 1,
    backgroundColor: 'green',
    flex: 3,
    alignSelf: 'center',
    fontSize: 20,
    position: 'absolute'
  },
  textThreeStyle: {
    borderWidth: 1,
    backgroundColor: 'blue',
    flex: 1
  }
});

export default BoxScreen;
