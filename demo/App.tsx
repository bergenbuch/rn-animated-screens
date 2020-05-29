import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {HomeScreen} from './app/screens/home/home.screen';
import {ArticlesScreen} from './app/screens/articles/articles.screen';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Articles" component={ArticlesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
