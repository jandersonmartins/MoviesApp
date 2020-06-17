import {combineReducers} from '@reduxjs/toolkit';
import {reducer as appReducer} from './app';
import {reducer as moviesReducer} from './movies';

const createReducer = () =>
  combineReducers({
    app: appReducer,
    movie: moviesReducer,
  });

export {createReducer};
