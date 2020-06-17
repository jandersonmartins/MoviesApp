import React from 'react';
import {AuthRoutes} from '../Auth/AuthRoutes';
import {MovieRoutes} from '../Movie';

const Routes = ({started}) => (started ? <MovieRoutes /> : <AuthRoutes />);

export default Routes;
