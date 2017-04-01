import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import logo from './unicorn.png';
import './App.css';
import TopContainer from './TopContainer';
import OrgListContainer from './OrgListContainer';


const App = () => (

  <Router className="app">
    <div className="wrap container-fluid">
        <Jumbotron className="app-header text-center row">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="col-xs-12">vol.unque.er</h1>
        </Jumbotron>


        <main className="app-content row">
          <Route exact path="/" component={TopContainer}/>
          <Route path="/topics" component={OrgListContainer}/>
        </main>

    </div>
  </Router>
)

export default App;
