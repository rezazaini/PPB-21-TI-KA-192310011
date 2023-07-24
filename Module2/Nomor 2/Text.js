import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextComponent = ({ teks }) => {
  return (
    <Text style={styles.paragraph}>
      {teks}
    </Text>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default TextComponent;
