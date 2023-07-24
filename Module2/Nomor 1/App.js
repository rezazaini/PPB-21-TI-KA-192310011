import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ItemTyphograp = () => {
  return (
    <View style={styles.container}>
      <Text 
        style={{
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "brown",
          color: "#fff",
          textAlign: "center",
          textDecorationLine: "underline",
          padding: 10,
          marginBottom: 10
        }}
      >
        History of Bicycle
      </Text>
      <Text style={styles.paragraph}>
        A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a human-powered or
        motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached
        to a frame, one behind the other. A bicycle rider is called a cyclist
        or bicyclist.
      </Text>
      <Image
        source={require('./gambar/a.jpg')} 
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default ItemTyphograp;
