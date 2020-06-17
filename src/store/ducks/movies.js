import {createSlice} from '@reduxjs/toolkit';
import {call, put, takeEvery} from 'redux-saga/effects';
import {MOVIE_API_KEY} from 'react-native-dotenv';
import {request} from '../../utils/http';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    fetch: state => {
      state.movies = [];
      state.loading = true;
      state.error = null;
    },

    fetchSuccess: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },

    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const {actions, reducer, name} = moviesSlice;

function* fetchMovies() {
  try {
    const {data} = yield call(() =>
      request(
        `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}`,
      ),
    );
    yield put(actions.fetchSuccess(data.results));
  } catch (e) {
    yield put(actions.fetchError(e.message));
  }
}

function* saga() {
  yield takeEvery(actions.fetch.type, fetchMovies);
}

export {actions, reducer, name, saga};
