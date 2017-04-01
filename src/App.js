import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './unicorn.png';
import './App.css';
import TopContainer from './TopContainer';


const App = () => (

  <Router>
    <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Volunqueer</h2>
        </div>

      <hr/>

      <Route exact path="/" component={TopContainer}/>
    </div>
  </Router>
)

export default App;
