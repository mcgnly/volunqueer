import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import orgs from './orgs.js';
import './home.css';

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
					<Button key={iterator} id={task.field_of_work} onClick={(ev) => { addTag(ev.target.id); } }> {task.field_of_work} </Button>
				);
			} else {
				return;
			}
	});

    return (
	<article className="text-center">
    <section className="lead-cta col-xs-12">
      <h2>Contribute much?</h2>
      <p className="lead">Pick a few things to help the community out with</p>
    </section>
    <section className="col-xs-12">
      <ButtonToolbar className="skills-container">
        {makeTags}
      </ButtonToolbar>
    </section>
		<section className="col-xs-12">
      		<Link to="/topics">
                  <Button bsStyle="primary">Find an organization</Button>
           </Link>

    </section>
	</article>
    );
}

