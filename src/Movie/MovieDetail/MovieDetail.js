import React from 'react';
import {Text} from 'react-native';
import {ScrollableView} from '../../Common';
import * as S from './MovieDetail.styles';

const MovieDetail = ({route}) => {
  const {posterPath, title, overview, releaseDate} = route.params;

  return (
    <ScrollableView>
      <S.ImageContainer>
        <S.Image
          source={{uri: `https://image.tmdb.org/t/p/w200/${posterPath}`}}
        />
      </S.ImageContainer>

      <S.InfoContainer>
        <S.Title>{title}</S.Title>
        <Text>{releaseDate}</Text>
      </S.InfoContainer>

      <S.InfoContainer>
        <S.Title>Description</S.Title>
        <Text>{overview}</Text>
      </S.InfoContainer>
    </ScrollableView>
  );
};

export default MovieDetail;
