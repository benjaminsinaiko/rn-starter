import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetail = ({ title, imageSource, imgScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {imgScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // style
});

export default ImageDetail;
