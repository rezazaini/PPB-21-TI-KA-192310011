import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreenEmbedded = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./gambar/ibikkk.jpg')} style={styles.image} />
      <Text style={styles.text}>Splash Screen (Embedded)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SplashScreenEmbedded;
