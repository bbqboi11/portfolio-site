import * as React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from '../components/header';
import { Home } from './home';

import './index.scss';

export default () => {
  return (
    <main className="main">
      <Router>
        <Header />
        <Redirect from="/" to="/home" />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/works">
            Works
          </Route>
          <Route path="/about">
            About
          </Route>
        </Switch>
      </Router>  
    </main>
  )
}
