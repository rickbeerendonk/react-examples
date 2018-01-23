/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class GreetingEditor extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { name: 'World' };
  onChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({ name: value }));
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name === 'Error') {
      throw new Error('Error');
    }

    return true;
  }
  render() {
    if (this.state.name === 'renderException') {
      throw new Error('render exception');
    }

    return [
      <input key="input" onChange={this.onChange} value={this.state.name} />,
      <h1 key="output">Hello {this.state.name}!</h1>
    ];
  }
}
