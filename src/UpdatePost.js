import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {useMutation} from '@tanstack/react-query';

const UpdatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const mutation = useMutation(updatedPost =>
    axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost),
  );

  const submitData = () => {
    mutation.mutate({title, body});
  };

  if (mutation.isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (mutation.isError) {
    return <Text>Error: {mutation.error.message}</Text>;
  }

  if (mutation.isSuccess) {
    return <Text>Post updated!</Text>;
  }

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
        }}
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="Title"
      />
      <TextInput
        style={{
          height: 80,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
        }}
        value={body}
        onChangeText={text => setBody(text)}
        placeholder="Body"
        multiline
      />
      <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 10, borderRadius: 5}}
        onPress={submitData}>
        <Text style={{color: 'white'}}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdatePost;
