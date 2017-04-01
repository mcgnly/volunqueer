import React, { Component } from 'react';

export class OrgCard extends Component {
  
  constructor(props) {
    super(props);
    this.org = this.props.org
    this.org.work = this.props.org['field-of-work']
  }


  render() {
    return (
      <div className="org-card">
        <div className="org-logo">
          <img className="img-responsive img-circle" src={this.org.logo} alt={this.org.name} />
        </div>
        <div className="org-info">
          <h2 className="org-name">{this.org.name}</h2>
          <p className="org-mission">{this.org.mission}</p>
          <p className="need-descritpion">{this.org.description}</p>
          <p className="need-field">{this.org.work}</p>
          <p className="org-cta"><a href={"mailto:" + this.org.contact}>Apply</a></p>
        </div>
      </div>
    );
  }
}

// export default OrgCard;
