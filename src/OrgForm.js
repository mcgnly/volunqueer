import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import orgs from './orgs.js';
import './home.css';

export default ({ }) => {

    return (
	<article className="text-center">
    <section className="lead-cta col-xs-12">
      <h2>How can we help?</h2>
      <p className="lead">Tell us about your organization!</p>
      <p className="lead">Please note: this is a platform for volunteering and contributing to the community, not merely unpaid labor. Treat your volunteers with respect, and consider that they are using their free time to help you. </p>
    </section>
    <section className="col-xs-12">
      <ButtonToolbar className="skills-container">

      </ButtonToolbar>
    </section>
		<section className="col-xs-12">
			
           <Link to="/thanks">
                  <Button bsStyle="primary">Submit your organization's task for review</Button>
           </Link>
    </section>
	</article>
    );
}

