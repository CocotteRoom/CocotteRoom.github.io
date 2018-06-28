import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { MainRouter } from './../pages/mainRouter/MainRouter';
import Header from '../modules/header/Header';

export const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      <MainRouter />
    </div>
  </Provider>
);
