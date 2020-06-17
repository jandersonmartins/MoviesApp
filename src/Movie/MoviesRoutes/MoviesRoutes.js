import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MovieListContainer} from '../MovieList';

const Stack = createStackNavigator();

const MoviesRoutes = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={MovieListContainer} />
  </Stack.Navigator>
);

export default MoviesRoutes;
