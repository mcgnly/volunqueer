import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './unicorn.png';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Home from './home.js'


const App = () => (

  // render() {
  //   return (
  //     <div className="App">

  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>


  //     </div>
  //   );
  // }







  <Router>
    <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Volunqueer</h2>
        </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)



const About = () => (
  <div>
    <h2>About</h2>
        <Button
          bsStyle="success"
          bsSize="large"
          href="http://react-bootstrap.github.io/components.html"
          target="_blank">
          View React Bootstrap Docs
        </Button>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default App;