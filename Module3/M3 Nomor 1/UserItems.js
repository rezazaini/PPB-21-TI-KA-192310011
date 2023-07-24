import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserItem = ({ name, gender }) => {
  const genderIcon = gender === 'M' ? require('./gambar/boy.jpg') : require('./gambar/girl.jpg');

  return (
    <View style={styles.container}>
      <Text>Name: {name}</Text>
      <Image source={genderIcon} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
});

export default UserItem;
