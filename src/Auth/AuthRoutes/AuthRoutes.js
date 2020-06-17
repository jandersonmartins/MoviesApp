import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../Login';

const Stack = createStackNavigator();

const AuthRoutes = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="login" component={Login} />
  </Stack.Navigator>
);

export default AuthRoutes;
