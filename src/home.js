import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';


function addToSelected() {
	
}

const Home = () => (
  <div>
	<h2>Welcome to VolunQueer- what are you interested in?</h2>

	<ul>
		<li> some kind of tag thing </li>
		<li> some kind of tag thing </li>
		<li> some kind of tag thing </li>
	</ul>

	<Link to="/about"
		  bsStyle="success"
		  bsSize="large"
		  target="_blank">
		  Find an organization
	</Link>
  </div>
)

export default Home;

//TODO: don't open link in new tab???