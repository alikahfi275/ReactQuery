import React from 'react';
import {useMutation} from '@tanstack/react-query';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import axios from 'axios';

const DeletePost = () => {
  const mutation = useMutation(() =>
    axios.delete('https://jsonplaceholder.typicode.com/posts/1'),
  );

  const deleteData = () => {
    mutation.mutate();
  };

  if (mutation.isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (mutation.isError) {
    return <Text>Error: {mutation.error.message}</Text>;
  }

  if (mutation.isSuccess) {
    return <Text>Post deleted!</Text>;
  }

  return (
    <View>
      <TouchableOpacity
        style={{backgroundColor: 'red', padding: 10, borderRadius: 5}}
        onPress={deleteData}>
        <Text style={{color: 'white'}}>Delete Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeletePost;
