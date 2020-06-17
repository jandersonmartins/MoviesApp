import React from 'react';
import * as S from './MovieListItem.styles';

const MovieListItem = ({movie, last}) => {
  return (
    <S.Container last={last}>
      <S.Image
        source={{uri: `https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}}
        resizeMode="cover"
      />
      <S.TextContainer>
        <S.ReleaseData>{movie.release_date}</S.ReleaseData>
        <S.Title>{movie.title}</S.Title>
      </S.TextContainer>
    </S.Container>
  );
};

export default MovieListItem;
