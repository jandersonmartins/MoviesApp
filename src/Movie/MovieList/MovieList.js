import React, {memo} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MovieListItem} from './MovieListItem';
import * as S from './MovieList.styles';

const MovieList = ({loading, movies, error}) => {
  const content = () => {
    if (loading) {
      return <Text>Loading</Text>;
    }
    if (error) {
      return <Text>{error}</Text>;
    }
    return (
      <ScrollView contentContainerStyle={S.ScrollViewContent}>
        <S.Container>
          {movies.map((movie, key) => (
            <MovieListItem
              movie={movie}
              key={movie.id}
              last={key === movies.length - 1}
            />
          ))}
        </S.Container>
      </ScrollView>
    );
  };

  return <SafeAreaView>{content()}</SafeAreaView>;
};

export default memo(MovieList);
