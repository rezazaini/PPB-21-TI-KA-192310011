import React from 'react';
import { Image, StyleSheet } from 'react-native';

const GambarComponent = ({ imageSource }) => {
  return (
    <Image
      source={imageSource}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default GambarComponent;
