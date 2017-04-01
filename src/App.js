import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import logo from './unicorn.png';
import './App.css';
import TopContainer from './TopContainer';


const App = () => (

  <Router className="app">
    <div>
        <Jumbotron className="app-header text-center">
          <img src={logo} className="app-logo" alt="logo" />
          <h1>Volunqueer</h1>
        </Jumbotron>

      <Route exact path="/" component={TopContainer}/>
    </div>
  </Router>
)

export default App;
