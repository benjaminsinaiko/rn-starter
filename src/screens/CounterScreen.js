import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 });
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      <Text>Current Counter: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // style
});

export default CounterScreen;
