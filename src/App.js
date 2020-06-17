import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {Bootstrap} from './Bootstrap';
import store from './store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <ThemeProvider theme={{}}>
        <Bootstrap />
      </ThemeProvider>
    </NavigationContainer>
  </Provider>
);

export default App;
