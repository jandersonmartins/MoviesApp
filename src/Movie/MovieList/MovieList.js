import React, {memo} from 'react';
import {Text} from 'react-native';
import {MovieListItem} from './MovieListItem';
import {ScrollableView} from '../../Common';

const MovieList = ({loading, movies, error, onPress}) => {
  const content = () => {
    if (loading) {
      return <Text>Loading</Text>;
    }
    if (error) {
      return <Text>{error}</Text>;
    }
    return movies.map((movie, key) => (
      <MovieListItem
        movie={movie}
        key={movie.id}
        last={key === movies.length - 1}
        onPress={onPress}
      />
    ));
  };

  return <ScrollableView>{content()}</ScrollableView>;
};

export default memo(MovieList);
