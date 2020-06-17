import React from 'react';
import MovieList from './MovieList';
import useMovieList from './useMovieList';

const MovieListContainer = ({navigation}) => {
  const movie = useMovieList();
  return (
    <MovieList
      {...movie}
      onPress={moviePressed =>
        navigation.push('MovieDetail', {
          posterPath: moviePressed.poster_path,
          title: moviePressed.title,
          overview: moviePressed.overview,
          releaseDate: moviePressed.release_date,
        })
      }
    />
  );
};

export default MovieListContainer;
