import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {Bootstrap} from './Bootstrap';

const App = () => (
  <NavigationContainer>
    {/* TODO: add theme :) */}
    <ThemeProvider theme={{}}>
      <Bootstrap />
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
