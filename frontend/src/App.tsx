import React, { VFC } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router';
import V1Home from 'components/v1/V1Home';
import Home from './components/Home';

const App: VFC = () => (
  <div className="container">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/v1">
        <V1Home />
      </Route>

      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
