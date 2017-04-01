import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './home.css';

export default ({ }) => {

    return (
	<article className="text-center">
    <section className="lead-cta col-xs-12">
      <h2>Thanks for your submission!</h2>
      <p className="lead">Your task will be reviewed by our moderators and should appear in the marketplace in the next few days</p>
    </section>
	</article>
    );
}

