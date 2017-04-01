import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import { OrgPg } from './orgcard.js'


export default ({selectedTags, addTag}) => {
    return (
	<div>
		<h2>Welcome to VolunQueer- what are you interested in?</h2>

		<ul>
			<li id="cause1" onClick={(ev)=>{addTag(ev.target.id)}}> some kind of tag thing </li>
			<li id="cause2" onClick={(ev)=>{addTag(ev.target.id)}}> some kind of tag thing </li>
			<li id="cause3" onClick={(ev)=>{addTag(ev.target.id)}}> some kind of tag thing </li>
		</ul>

		<li><Link to="/topics">Find an organization</Link></li>
			
	</div>
    );
}

//TODO: don't open link in new tab???