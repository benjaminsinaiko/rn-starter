import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
      </View>
      <View style={styles.boxViewStyle}>
        <Text style={styles.boxOne}></Text>
        <Text style={styles.boxTwo}></Text>
        <Text style={styles.boxThree}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    marginBottom: 50
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
  },
  boxViewStyle: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxOne: {
    height: 100,
    width: 100,
    backgroundColor: '#9481f7'
  },
  boxTwo: {
    height: 100,
    width: 100,
    backgroundColor: '#f2bd2c',
    alignSelf: 'flex-end'
  },
  boxThree: {
    height: 100,
    width: 100,
    backgroundColor: '#01a1f7'
  }
});

export default BoxScreen;
