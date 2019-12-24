import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './not-found';
import Home from './home';

const Router = () => (
  <Switch>
    <Route path='/' component={Home} exact />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
