import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { OrgCard } from './OrgCard.js';
import orgs from './orgs.js';

export default ({ selectedTags }) => {

let orgsData = orgs();
let iterator = 0;

	let makeTaskCards =
		orgsData.map((task) => {
			iterator+=1;
			console.log('task', task)
			return (
				<OrgCard key={iterator} org={task}/>
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
