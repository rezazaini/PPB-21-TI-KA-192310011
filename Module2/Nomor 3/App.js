import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

const SplashScreen = () => {
  useEffect(() => {
    // Simulate loading process (example: fetching data, checking authentication, etc.)
    setTimeout(() => {
      // Navigasi ke halaman berikutnya setelah selesai loading
      // Di sini Anda bisa menggunakan navigation library seperti React Navigation
      console.log('Splash Screen is ready');
    }, 3000); // Ganti dengan durasi loading yang sesuai
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#7b277c" barStyle="light-content" />
      <Image source={require('./gambar/ii.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7b277c',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
  },
});

export default SplashScreen;
