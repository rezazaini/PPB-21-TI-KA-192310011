import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyBio = {
  identity: {
    npm: 192310011,
    firstname: "REZA",
    middlename: "ZAINI",
    lastname: "FAHMI",
  },
  educations: [
    { id: 1, school: "SDN Pajajaran Bogor" },
    { id: 2, school: "SMPN 1 Caringin" },
    { id: 3, school: "SMKN 4 Kota Bogor" },
  ],
  mobile_phone: "089650084330",
  email: "192310011@student.ibik.ac.id",
  gender: 'M',
  tall_body: 179,
  weight_body: 64.5
};

const MyBioComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Biografi</Text>
      <Text style={styles.subtitle}>Identity:</Text>
      <Text>NPM: {MyBio.identity.npm}</Text>
      <Text>First Name: {MyBio.identity.firstname}</Text>
      <Text>Middle Name: {MyBio.identity.middlename}</Text>
      <Text>Last Name: {MyBio.identity.lastname}</Text>

      <Text style={styles.subtitle}>Education:</Text>
      {MyBio.educations.map(education => (
        <Text key={education.id}>- {education.school}</Text>
      ))}

      <Text style={styles.subtitle}>Contact Information:</Text>
      <Text>Mobile Phone: {MyBio.mobile_phone}</Text>
      <Text>Email: {MyBio.email}</Text>

      <Text style={styles.subtitle}>Physical Attributes:</Text>
      <Text>Gender: {MyBio.gender}</Text>
      <Text>Tall: {MyBio.tall_body} cm</Text>
      <Text>Weight: {MyBio.weight_body} kg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
  },
});

export default MyBioComponent;
