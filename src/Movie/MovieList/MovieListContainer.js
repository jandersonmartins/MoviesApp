import React from 'react';
import MovieList from './MovieList';
import useMovieList from './useMovieList';

const MovieListContainer = () => {
  const movie = useMovieList();
  return <MovieList {...movie} />;
};

export default MovieListContainer;
