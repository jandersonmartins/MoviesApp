import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {actions} from '../../store/ducks/app';
import * as S from './Login.styles';

const Login = () => {
  const dispatch = useDispatch();

  const handleOnPress = () => dispatch(actions.setStarted(true));

  return (
    <SafeAreaView>
      <S.Container>
        <Button title="Start" onPress={handleOnPress} />
      </S.Container>
    </SafeAreaView>
  );
};

export default Login;
