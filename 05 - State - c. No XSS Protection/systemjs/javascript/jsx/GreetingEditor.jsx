/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };
    
    // Bind all non-react methods to this.
    this.onChange = this.onChange.bind(this);    
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div>
        <input onChange={this.onChange} value={this.state.name} />
        <h1>Hello <span dangerouslySetInnerHTML={{ __html: this.state.name }} />!</h1>
      </div>
    );
  }
}
