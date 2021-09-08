import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from '../../containers/ListPage';
import DetailsPage from '../../containers/DetailsPage';

export default function App() {
  return (
    <Router>
      <h1>Animal Crossing</h1>
      <Switch>
        <Route
          path="/"
          exact
          render={routerProps => <ListPage {...routerProps}/>}
        />
        <Route
          path="/:villager"
          exact
          render={routerProps => <DetailsPage {...routerProps}/>}
        />
      </Switch>
    </Router>
  );
}
