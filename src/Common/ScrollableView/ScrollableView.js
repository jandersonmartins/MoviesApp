import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import * as S from './ScrollableView.styles';

const ScrollableView = ({children}) => (
  <SafeAreaView>
    <ScrollView contentContainerStyle={S.ScrollViewContent}>
      <S.Container>{children}</S.Container>
    </ScrollView>
  </SafeAreaView>
);

export default ScrollableView;
