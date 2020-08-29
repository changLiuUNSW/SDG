import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import AppNavigator from './navigation/AppNavigator';
import configureStore from './stores';
import { Provider } from 'react-redux';

const Container = styled.View`
  flex: 1;
`;

export const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Container>
      <StatusBar style="auto" />
      <AppNavigator />
    </Container>
  </Provider>
);

export default App;
