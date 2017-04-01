import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import orgs from './orgs.js';
import './home.css';

let orgsData = orgs();
let uniqueTags = [...new Set(orgsData.map((org) => {
  return org.field_of_work;
}))];

export default ({ selectedTags, toggleTag }) => {
  let fieldTags = uniqueTags.map((field, index) => {
    return (
      <Button className={(selectedTags.includes(field)) ? 'btn-success' : ''} key={index} id={"field-" + index} onClick={(ev) => { toggleTag(field); } }> {field} </Button>
    );
  });

  return (
	<article className="text-center">
    <section className="lead-cta col-xs-12">
      <h2>Contribute much?</h2>
      <p className="lead">Pick a few things to help the community out with</p>
    </section>
    <section className="col-xs-12">
      <ButtonToolbar className="skills-container">
        {fieldTags}
      </ButtonToolbar>
    </section>
		<section className="col-xs-12">
      		<Link to="/topics">
                  <Button bsStyle="primary">Find an organization</Button>
           </Link>
           <Link to="/orgs">
                  <Button bsStyle="primary">I am an organization looking for volunteers!</Button>
           </Link>
    </section>
	</article>
  );
}
