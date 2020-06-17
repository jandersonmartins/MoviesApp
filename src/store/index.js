import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {createReducer} from './ducks';
import {createInjectorsEnhancer} from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware({});
const {run: runSaga} = sagaMiddleware;

const store = configureStore({
  reducer: createReducer(),
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
  enhancers: [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ],
});

export default store;
