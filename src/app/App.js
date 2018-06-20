import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { MainRouter } from './../pages/mainRouter/MainRouter';

export const App = () => (
  <Provider store={store}>
    <MainRouter />
  </Provider>
);
