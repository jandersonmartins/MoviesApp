import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {setStarted} from '../../store/ducks/app';
import * as S from './Login.styles';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <S.Container>
        <Button title="Start" onPress={() => dispatch(setStarted(true))} />
      </S.Container>
    </SafeAreaView>
  );
};

export default Login;
