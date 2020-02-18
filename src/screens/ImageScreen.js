import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetail title={'Forest'} imgScore={6} imageSource={require('../../assets/beach.jpg')} />
      <ImageDetail title={'Beach'} imgScore={8} imageSource={require('../../assets/forest.jpg')} />
      <ImageDetail
        title={'Mountain'}
        imgScore={9}
        imageSource={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //
});

export default ImageScreen;
