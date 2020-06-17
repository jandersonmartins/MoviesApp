import React, {memo} from 'react';
import {SafeAreaView, Text} from 'react-native';

const MovieList = ({loading, movies, error}) => {
  const content = () => {
    if (loading) {
      return <Text>Loading</Text>;
    }
    if (error) {
      return <Text>{error}</Text>;
    }
    return <Text>Total movies: {movies.length}</Text>;
  };

  return <SafeAreaView>{content()}</SafeAreaView>;
};

export default memo(MovieList);
