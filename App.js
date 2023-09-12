import React from 'react';
import Home from './Components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PhotosProvider } from './Contexts/PhotosContext';
import PhotoSwiper from './Components/PhotoSwiper';

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
            component={PhotoSwiper}
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
