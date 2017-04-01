import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import { OrgCard } from './orgcard.js'

export default ({selectedTags}) => {
	console.log('selectedTags outside', selectedTags)
	let tagsFromProps = ['a', 'b', 'c'];

	let makeTaskCards = 
		selectedTags.map((task) => {
		console.log('selectedTags inside', selectedTags);
			return (
				<li id={task} > {task} </li>
			);
		});


    return (
	<div>
		<h2>Here are some tasks and organizations that you might be interested in:</h2>
		<ul>
		{makeTaskCards}
		</ul>

	</div>
    );
};

//TODO: don't open link in new tab???
