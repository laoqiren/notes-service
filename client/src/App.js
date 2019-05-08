import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './components/Index/Index.js';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <content>
        <Router>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/profile">用户</Link>
            </li>
          </ul>
          
          <Route path="/" exact component={Index}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Router>
      </content>
    </div>
  );
}

export default App;
