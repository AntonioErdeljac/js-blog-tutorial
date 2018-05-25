import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../../components';

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default withRouter(App);