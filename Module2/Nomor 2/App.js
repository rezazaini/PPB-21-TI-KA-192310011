import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GambarComponent from './Image';
import TextComponent from './Text';

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
      <TextComponent
        teks="A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a human-powered or
        motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached
        to a frame, one behind the other. A bicycle rider is called a cyclist
        or bicyclist."
      />
      <GambarComponent
        imageSource={require('./gambar/a.jpg')}
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
});

export default ItemTyphograp;
