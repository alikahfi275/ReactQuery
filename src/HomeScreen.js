import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const retrievePosts = async () => {
  const response = await axios.get('https://localhost:3000/posts/1');
  console.log(response);
  return response.data;
};

const HomeScreen = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery(['postsData'], retrievePosts);

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>An error occurred: {error.message}</Text>;

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={{padding: 10}}>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default HomeScreen;
