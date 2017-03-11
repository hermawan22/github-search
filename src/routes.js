import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './containers/home';
import UserDetails from './containers/userDetails';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path=":username" component={UserDetails} />
  </Route>
);
