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
			iterator += 1;

			if (selectedTags.indexOf(task.field_of_work) !== -1) {
				return (
					<OrgCard key={iterator} org={task}/>
				);
			} else {
				return;
			}
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
