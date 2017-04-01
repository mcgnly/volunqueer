import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './OrgCard.css';

export class OrgCard extends Component {

  constructor(props) {
    super(props);
    this.org = this.props.org
    this.org.work = this.props.org['field-of-work']
  }


  render() {
    return (
      <div className="org-card">
        <div className="org-logo col-md-3 text-center">
          <img className="img-responsive img-thumbnail" src={this.org.logo} alt={this.org.name} />
        </div>
        <div className="org-info col-md-9">
          <h2 className="org-name">{this.org.name}</h2>
          <p className="org-mission">{this.org.mission}</p>
          <p className="need-descritpion">{this.org.description}</p>
          <p className="need-field">{this.org.work}</p>
          <p className="org-cta text-right"><Button href={"mailto:" + this.org.contact} bsStyle="primary">Apply Now</Button></p>
        </div>
      </div>
    );
  }
}

// export default OrgCard;
