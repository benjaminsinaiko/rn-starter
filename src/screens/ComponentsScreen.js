import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Benjamin';

  return (
    <View>
      <Text style={styles.greetingHeader}>Getting started with React Native</Text>
      <Text style={styles.greetingName}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingHeader: {
    fontSize: 45
  },
  greetingName: {
    fontSize: 20
  }
});

export default ComponentsScreen;
