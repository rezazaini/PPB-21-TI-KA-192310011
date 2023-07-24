import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const postsData = [
  {
    id: '1',
    image: require('./gambar/rezapost.jpg'),
    likes: 103,
    comments: 12,
  },
  {
    id: '2',
    image: require('./gambar/postza.jpg'),
    likes: 250,
    comments: 30,
  },
  {
  id: '3',
    image: require('./gambar/postzaza.jpg'),
    likes: 550,
    comments: 60,
  },
];

const ProfileScreen = () => {
  const renderPostItem = ({ item }) => (
    <View style={styles.postItemContainer}>
      <Image source={item.image} style={styles.postImage} />
      <View style={styles.postStats}>
        <Text style={styles.postLikes}>{item.likes} Likes</Text>
        <Text style={styles.postComments}>{item.comments} Comments</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('./gambar/a.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>rezazaini_</Text>
          <Text style={styles.profileBio}>Story will be History</Text>
        </View>
      </View>
      <FlatList
        data={postsData}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileBio: {
    fontSize: 16,
    color: '#666',
  },
  postItemContainer: {
    flex: 1 / 3,
    margin: 2,
  },
  postImage: {
    width: '100%',
    height: 120,
  },
  postStats: {
    marginTop: 4,
    paddingHorizontal: 6,
  },
  postLikes: {
    fontSize: 12,
    color: '#333',
  },
  postComments: {
    fontSize: 12,
    color: '#333',
  },
});

export default ProfileScreen;
