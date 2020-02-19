import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.root}>
      <Text>Text Demo</Text>
      <Text>ENTER NAME: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text>ENTER PASSWORD:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 5 && (
        <Text style={styles.warning}>Password must be at least 5 characters</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 15
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  warning: {
    color: 'red',
    marginLeft: 15
  }
});

export default TextScreen;
