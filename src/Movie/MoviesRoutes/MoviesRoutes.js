import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MovieListContainer} from '../MovieList';
import {MovieDetail} from '../MovieDetail';

const Stack = createStackNavigator();

const MoviesRoutes = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={MovieListContainer} />
    <Stack.Screen name="MovieDetail" component={MovieDetail} />
  </Stack.Navigator>
);

export default MoviesRoutes;
