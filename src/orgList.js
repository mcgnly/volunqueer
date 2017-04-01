import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { OrgCard } from './OrgCard.js';
import orgs from './orgs.js';

let orgsData = orgs();

export default ({ selectedTags }) => {

  let filterdOrgs = orgsData.filter(task => {
    return selectedTags.includes(task.field_of_work);
  });

	let makeTaskCards = filterdOrgs.map((task, index) => {
		return (
			<OrgCard key={index} org={task}/>
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
