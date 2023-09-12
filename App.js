import React from 'react';
import Home from './Components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Photo from './Components/Photo';
import { PhotosProvider } from './Contexts/PhotosContext';
import ImageGallery from './Components/ImageGallery';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PhotosProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Photo"
          component={ImageGallery}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
 </PhotosProvider>
  );
};

export default App;
