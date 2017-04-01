import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Jumbotron, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
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
		<section style={
		    {marginTop: '30px',
		        paddingTop: '30px'}
		}>
		<h4>Didn't find what you were looking for?</h4>
		<form>
	        <FormGroup
	          controlId="formBasicText"
	        >
	        	<p>add your email here and we will send you a weekly digest of new organizations and tasks that match your selected interests:</p>
	          <ControlLabel>email:</ControlLabel>
	          <FormControl
	            type="text"
	            placeholder="Where can we reach you?"
	          />
	        </FormGroup>
	    </form>

	    <Link to="/volunteerThanks">
                  <Button bsStyle="primary">Sign me up!</Button>
        </Link>
        </section>
	</article>
    );
};
