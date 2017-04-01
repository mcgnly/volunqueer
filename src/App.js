import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import logo from './logo2.png';
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
        <Jumbotron className="app-header text-center row" style={
        {borderRadius:"0px"}}>
          <img src={logo} className="app-logo" alt="logo" />
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
