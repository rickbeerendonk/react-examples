/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class GreetingEditor extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { name: 'World' };
  onChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <input onChange={this.onChange} value={this.state.name} />
        {
          // Change render based on name:
          (this.state.name
            ? <h1>Hello {this.state.name}!</h1>
            : <h1 style={{color: 'red'}}>No name provided.</h1>
          )
        }
      </React.Fragment>
    );
  }
}
