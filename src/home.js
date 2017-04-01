import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';


let selectedTags = [];

function addToSelected(tag) {
	selectedTags.push(tag);
	console.log(selectedTags);
}

const Home = () => (
  <div>
	<h2>Welcome to VolunQueer- what are you interested in?</h2>

	<ul>
		<li id="cause1" onClick={(ev)=>{addToSelected(ev.target.id)}}> some kind of tag thing </li>
		<li id="cause2" onClick={(ev)=>{addToSelected(ev.target.id)}}> some kind of tag thing </li>
		<li id="cause3" onClick={(ev)=>{addToSelected(ev.target.id)}}> some kind of tag thing </li>
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