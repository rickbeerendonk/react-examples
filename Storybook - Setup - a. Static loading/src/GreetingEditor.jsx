/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';
import { hot } from 'react-hot-loader';

import EditBox from './EditBox';
import Greeting from './Greeting';

/* global module */

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(newName) {
    this.setState(() => ({ name: newName }));
  }
  render() {
    return (
      <React.Fragment>
        <EditBox onChange={this.handleChange} value={this.state.name} />
        <Greeting name={this.state.name} />
      </React.Fragment>
    );
  }
}

export default hot(module)(GreetingEditor);
