import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Jumbotron, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { OrgCard } from './OrgCard.js';
import orgs from './orgs.js';

export default ({ selectedTags }) => {

let orgsData = orgs();
let iterator = 0;

	let makeTaskCards =
		orgsData.map((task) => {
			iterator += 1;
			if (selectedTags.length < 1) {
				return <OrgCard key={iterator} org={task}/>
			} else {
				if (selectedTags.indexOf(task.field_of_work) !== -1) {
					return (
						<OrgCard key={iterator} org={task}/>
					);
				} else {
					return;
				}
				
			}

	});

    return (
	<div>
		<h2>Here are some tasks and organizations that you might be interested in:</h2>
		<ul>
		{makeTaskCards}
		</ul>
		<section style={
		    {marginTop: '30px',
		        paddingTop: '30px',
		        borderTop: '1px solid'}
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
	</div>
    );
};
