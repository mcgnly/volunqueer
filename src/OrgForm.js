import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar, DropdownButton, MenuItem, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import orgs from './orgs.js';
import './orgform.css';

export default ({ }) => {
	let orgsData = orgs();
	let iterator = 0;
	let alreadyUsed = [];
	let menuMaker =
		orgsData.map((task) => {
			iterator+=1;
			if (alreadyUsed.indexOf(task.field_of_work)===-1){
				alreadyUsed.push(task.field_of_work);
				return (
					<MenuItem eventKey={iterator}>{task.field_of_work}</MenuItem>
				);
			} else {
				return;
			}
	});

    return (
	<article className="text-center">
    <section className="col-xs-12 col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h2>How can we help?</h2>
      <p className="lead">Tell us about your organization!</p>
      <p>Please note: this is a platform for volunteering and contributing to the community, not merely unpaid labor. Treat your volunteers with respect, and consider that they are using their free time to help you. </p>
    </section>
		<section className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">


	<form>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>What is the name of the organization?</ControlLabel>
          <FormControl
            type="text"
            placeholder="What are you called?"
          />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Tell us something about your organization: </ControlLabel>
          <FormControl
            type="text"
            placeholder="Description of your organization"
          />
        </FormGroup>

               <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Tell us something about your mission: </ControlLabel>
          <FormControl
            type="text"
            placeholder="How are you changing the world?"
          />
        </FormGroup>

        <FormGroup controlId="formBasicText">
          <ControlLabel>What kind of task do you need help with? Volunteers will be able to choose what they are most skilled at or willing to do.</ControlLabel>
        	<DropdownButton title='Task Category'>
				{menuMaker}
			</DropdownButton>
        </FormGroup>
	</form>
           <Link to="/thanks">
                  <Button bsStyle="primary">Submit your organization's task for review</Button>
           </Link>
    </section>
	</article>
    );
}
