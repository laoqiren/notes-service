import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Tab from './components/Tab/Tab';
import Index from './components/Index/Index.js';
import TimeLine from './components/TimeLine/TimeLine';
import Profile from './components/Profile';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={Index}></Route>
            <Route path="/timeLine" component={TimeLine}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route component={TimeLine}></Route>
          </Switch>
        </div>
        <Tab />
      </Router>
    );
  }
}
