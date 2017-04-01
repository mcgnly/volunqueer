import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import orgs from './orgs.js';

export default ({ selectedTags, addTag }) => {

	let orgsData = orgs();
	let iterator = 0;
	let alreadyUsed = [];
	let makeTags =
		orgsData.map((task) => {
			iterator+=1;
			if (alreadyUsed.indexOf(task.field_of_work)===-1){
				alreadyUsed.push(task.field_of_work);
				return (
					<li key={iterator} id={task.field_of_work} onClick={(ev) => { addTag(ev.target.id); } }> {task.field_of_work} </li>
				);
			} else {
				return;
			}
	});

    return (
	<div>
		<h2>Welcome to VolunQueer- what are you interested in?</h2>

		<ul>
			{makeTags}
		</ul>

		<li><Link to="/topics">Find an organization</Link></li>

	</div>
    );
};
