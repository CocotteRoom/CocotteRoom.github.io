import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './../home/Home';
import { Recipe } from './../recipe/Recipe';
import { Login } from './../login/Login';
import { NotFound } from './../notFound/NotFound';

export const MainRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipe" component={Recipe} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
