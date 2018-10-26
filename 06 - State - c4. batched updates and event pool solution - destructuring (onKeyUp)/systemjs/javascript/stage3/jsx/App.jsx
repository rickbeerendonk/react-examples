/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class App extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { pressed: '' };
  onKeyUp = ({ key }) => {
    this.setState(state => ({ pressed: state.pressed + key }));
  };

  render() {
    return (
      <React.Fragment>
        <input onKeyUp={this.onKeyUp} />
        <div>Pressed: {this.state.pressed}</div>
      </React.Fragment>
    );
  }
}
