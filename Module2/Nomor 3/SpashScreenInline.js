import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreenInline = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#3498db', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./gambar/ibikkk.jpg')} style={styles.image} />
      <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold' }}>Splash Screen (Inline)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default SplashScreenInline;
