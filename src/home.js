import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import { OrgPg } from './orgcard.js'

let selectedTags = [];

function addToSelected(tag) {
	//if the tag is already in the array, don't add it again
	selectedTags.push(tag);
	console.log(selectedTags);
}

function nextPg(selectedTags) {}
// function generateTags() {};

const Home = () => (
  <div>
	<h2>Welcome to VolunQueer- what are you interested in?</h2>

	<ul>
		<li id="cause1" onClick={(ev)=>{addToSelected(ev.target.id)}}> some kind of tag thing </li>
		<li id="cause2" onClick={(ev)=>{addToSelected(ev.target.id)}}> some kind of tag thing </li>
		<li id="cause3" onClick={(ev)=>{addToSelected(ev.target.id)}}> some kind of tag thing </li>
	</ul>


		Find an organization
  </div>
)

export default Home;

//TODO: don't open link in new tab???