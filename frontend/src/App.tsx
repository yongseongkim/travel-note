import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import DestinationDetail from './components/DestinationDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/destinations/:id">
          <DestinationDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
