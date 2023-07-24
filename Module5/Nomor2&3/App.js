// Install dependencies first:
// expo install expo-status-bar

import React, { useState } from 'react';
import { View, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, Provider as PaperProvider, Text } from 'react-native-paper';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignIn = () => {
    if (email === '212310016@student.ibik.ac.id' && password === 'BESTstudent_2023') {
      // Redirect to the next page (replace the following line with the actual navigation code)
      console.log('Login successful! Redirect to the next page.');
    } else {
      Alert.alert('Error', 'Email/Password is not match');
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (text.length < 3) {
      setPasswordError('Type minimum 3 characters');
    } else {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
      if (passwordRegex.test(text)) {
        setPasswordError('');
      } else {
        setPasswordError('Value must contain alphabet, number and symbol');
      }
    }
  };

  return (
    <ImageBackground source={require('./gambar/a.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <StatusBar style="light" backgroundColor="#3498db" />
        <Image source={require('./gambar/a.png')} style={styles.statusBarLogo} />
        <View style={styles.content}>
          <View style={styles.formContainer}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              label="Password"
              value={password}
              onChangeText={handlePasswordChange}
              style={styles.input}
              secureTextEntry
            />

            {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
          </View>

          <Button mode="contained" onPress={handleSignIn} style={styles.button}>
            Sign In
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
  },
  statusBarLogo: {
    position: 'absolute',
    top: 0,
    left: 10,
    height: 24,
    width: 100,
  },
  formContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default function App() {
  return (
    <PaperProvider>
      <SignInScreen />
    </PaperProvider>
  );
}
