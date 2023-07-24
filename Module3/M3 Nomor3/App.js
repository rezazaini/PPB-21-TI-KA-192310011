import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome5 } from 'react-native-vector-icons';

const storiesData = [
  { id: 'story1', imageUri: require('./gambar/a.jpg') },
  { id: 'story2', imageUri: require('./gambar/euisicon.jpg') },
  { id: 'story3', imageUri: require('./gambar/boy.jpg') },
  { id: 'story4', imageUri: require('./gambar/girl.jpg') },
  { id: 'story5', imageUri: require('./gambar/x.jpg') },
  { id: 'story6', imageUri: require('./gambar/z.png') },
  { id: 'story7', imageUri: require('./gambar/c.png') },
];

const postData = [
  { 
    id: '1', 
    username: 'rezazaini_', 
    avatarUri: require('./gambar/a.jpg'),
    imageUri: require('./gambar/rezapost.jpg'), 
    caption: 'Sun Shine!', 
    likes: 103, 
    comments: 12 
  },
  { 
    id: '2', 
    username: 'euisnrjnh', 
    avatarUri: require('./gambar/euisicon.jpg'),
    imageUri: require('./gambar/euispost.jpg'), 
    caption: 'Beautiful Sunset', 
    likes: 250, 
    comments: 35 
  },
  
];

const HomeScreen = () => {
  const renderStoryItem = ({ item }) => (
    <View style={styles.storyContainer}>
      <Image source={item.imageUri} style={styles.storyImage} />
      <Text style={styles.storyUsername}>{item.username}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={item.avatarUri} style={styles.avatar} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Image source={item.imageUri} style={styles.postImage} />
      <View style={styles.postInfo}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="heart" size={20} color="white"  />
          <Text style={styles.likeCommentText}>{item.likes}</Text>
          <FontAwesome5 name="comment" size={20} color="white" />
          <Text style={styles.likeCommentText}>{item.comments}</Text>
          <FontAwesome5 name="paper-plane" size={20} color="white"  />
        </View>
      </View>
    </View>
  );

  return (
      
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.statusBarContainer}>
        <Text style={styles.statusBarText}>Instagram </Text>
        <FontAwesome5 name="bell" size={20} color="white" />
      </View>
      {/* Stories */}
      <FlatList
        data={storiesData}
        renderItem={renderStoryItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesList}
      />

      {/* Posts */}
      <FlatList
        data={postData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  statusBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    
  },

  statusBarText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    
  },

  storiesList: {
    marginVertical: 10,
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  storyImage: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'green',
    marginLeft: 10 ,
    marginTop: 10,
    marginBottom: 10
  },
  storyUsername: {
    marginTop: 5,
    marginBottom: 30,
    color: 'white'
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postInfo: {
    padding: 10,
  },
  caption: {
    fontSize: 16,
  },
  likeCommentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  likeCommentText: {
    fontSize: 14,
    color: '#777',
    marginLeft: 7,
    marginRight: 13
    
  },
  iconContainer: {
    padding: 10,
    flex : 1,
    flexDirection: "row",
    alignItems: "center",
    

    
  }
});

export default HomeScreen;
