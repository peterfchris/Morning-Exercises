import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact';
import Home from './Components/Home';

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    );
  }
}
