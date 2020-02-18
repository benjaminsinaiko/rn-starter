import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 25 },
    { name: 'Friend #2', age: 33 },
    { name: 'Friend #3', age: 36 },
    { name: 'Friend #4', age: 54 },
    { name: 'Friend #5', age: 22 },
    { name: 'Friend #6', age: 40 },
    { name: 'Friend #7', age: 38 },
    { name: 'Friend #8', age: 30 }
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
