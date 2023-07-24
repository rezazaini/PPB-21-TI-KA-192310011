import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserItem from './UserItems';

const App = () => {
  const users = [
    { name: 'Reza Zaini', gender: 'M' },
    { name: 'Euis Nurjanah', gender: 'F' },
    { name: 'Nazmi Azka', gender: 'M' },
    { name: 'Kartika Davinci', gender: 'F' },
    { name: 'Prayoga Eltreo', gender: 'M' },
    { name: 'Ningsih Smith', gender: 'F' },
  ];

  return (
    <View style={styles.container}>
      {users.map((user, index) => (
        <UserItem key={index} name={user.name} gender={user.gender} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
});

export default App;
