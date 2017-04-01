import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import logo from './unicorn.png';
import './App.css';
import TopContainer from './TopContainer';
import OrgListContainer from './OrgListContainer';
import OrgForm from './OrgForm';
import OrgThanks from './OrgThanks';
import VolunteerThanks from './volunteerThanks';


const App = () => (

  <Router className="app">
    <div className="wrap container-fluid">
      <Link to="/">
        <Jumbotron className="app-header text-center row">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="col-xs-12">vol.unque.er</h1>
        </Jumbotron>
      </Link>


        <main className="app-content row">
          <Route exact path="/" component={TopContainer}/>
          <Route path="/topics" component={OrgListContainer}/>
          <Route path="/orgs" component={OrgForm}/>
          <Route path="/thanks" component={OrgThanks}/>
          <Route path="/volunteerThanks" component={VolunteerThanks}/>
        </main>

    </div>
  </Router>
)

export default App;
