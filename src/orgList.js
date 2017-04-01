import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { OrgCard } from './OrgCard.js';
import orgs from './orgs.js';
import './orgList.css';

let orgsData = orgs();

export default ({ selectedTags }) => {

  let filterdOrgs = orgsData.filter(task => {
    return selectedTags.includes(task.field_of_work);
  });

	let makeTaskCards = filterdOrgs.map((task, index) => {
		return (
      <div key={index} className="row">
			     <OrgCard org={task}/>
      </div>
		);
	});

    return (
	<article className="col-xs-12">
		<p className="lead">Here are some tasks and organizations that you might be interested in:</p>
		<section className="org-list">
		    {makeTaskCards}
		</section>
	</article>
    );
};
