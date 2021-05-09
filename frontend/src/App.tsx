import React, { VFC } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router';
import Home from 'components/Home';
import V1Home from 'components/v1/V1Home';
import V2Home from 'components/v2/V2Home';

const App: VFC = () => (
  <div className="container">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/v1">
        <V1Home />
      </Route>

      <Route exact path="/v2">
        <V2Home />
      </Route>

      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
