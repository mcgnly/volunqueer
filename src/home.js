import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';

import './home.css';
// import { OrgPg } from './orgcard.js'


export default ({selectedTags, addTag}) => {
    return (
	<article className="text-center">
    <section className="lead-cta col-xs-12">
      <h2>Contribute much?</h2>
      <p className="lead">Pick a few things to help the community out with</p>
    </section>
    <section className="col-xs-12">
      <ButtonToolbar className="skills-container">
        <Button id="cause-1" onClick={(ev)=>{addTag(ev.target.id)}}>field 1</Button>
        <Button id="cause-2" onClick={(ev)=>{addTag(ev.target.id)}}>field 2</Button>
        <Button id="cause-3" onClick={(ev)=>{addTag(ev.target.id)}}>field 3</Button>
      </ButtonToolbar>
    </section>
		<section className="col-xs-12">
      <Button bsStyle="primary">Find an organization</Button>
    </section>
	</article>
    );
}

//TODO: don't open link in new tab???
