import React from 'react';
import {Text} from 'react-native';
import {AuthRoutes} from '../Auth/AuthRoutes';

const Routes = ({started}) => (started ? <Text>Home</Text> : <AuthRoutes />);

export default Routes;
