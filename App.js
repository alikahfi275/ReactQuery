// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// Screen
import HomeScreen from './src/HomeScreen';
import CreatePost from './src/CreatePost';
import UpdatePost from './src/UpdatePost';
import DeletePost from './src/DeletePost';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CreatePost" component={CreatePost} />
          <Stack.Screen name="UpdatePost" component={UpdatePost} />
          <Stack.Screen name="DeletePost" component={DeletePost} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
