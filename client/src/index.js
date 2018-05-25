import React from 'react';
import createHistory from 'history/createBrowserHistory';
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';

import { App } from './components';

import '../resources/scss/style.scss';


ReactDOM.render(
  <Router history={createHistory()}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
