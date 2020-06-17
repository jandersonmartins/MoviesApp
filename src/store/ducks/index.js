import appReducer from './app';
import {combineReducers} from '@reduxjs/toolkit';

const createReducer = () =>
  combineReducers({
    app: appReducer,
  });

export {createReducer};
