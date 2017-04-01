import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import { OrgCard } from './orgcard.js'

export default ({selectedTags}) => {

	function makeTaskCards(taskList) {
		taskList.map((task)=>{
			return (
			<li id="cause3" > some kind of org/task thing </li>
			);
		})
		
	}

    return (
	<div>
		<h2>Here are some tasks and organizations that you might be interested in:</h2>
		{makeTaskCards(["a", "b", "c"])}

	</div>
    );
}

//TODO: don't open link in new tab???