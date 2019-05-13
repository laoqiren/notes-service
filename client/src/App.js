import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Tab from './components/Tab/Tab';
import TimeLine from './components/TimeLine/TimeLine';
import Life from './components/Life/Life';
import Sipirit from './components/Sipirit/Sipirit';
import Plan from './components/Plan/Plan';
import LoverCenter from './components/LoverCenter/LoverCenter';
import './App.css';

import LoverContext from './loverContext';
import LoverProvider from './components/LoverProvider';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={TimeLine}></Route>
            <Route path="/timeLine" component={TimeLine}></Route>
            <Route path="/life" component={Life}></Route>
            <Route path="/sipirit" component={Sipirit}></Route>
            <Route path="/plan" component={Plan}></Route>
            <Route path="/loverCenter" component={LoverCenter}></Route>
            <Route component={TimeLine}></Route>
          </Switch>
        </div>
        <Tab />
      </Router>
    );
  }
}

export default LoverProvider(LoverContext)(App);
