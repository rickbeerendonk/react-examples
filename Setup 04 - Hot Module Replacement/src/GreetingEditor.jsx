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

    this.onChange = this.onChange.bind(this);
  }
  onChange(newName) {
    this.setState(() => ({ name: newName }));
  }
  render() {
    return (
      <React.Fragment>
        <EditBox onChange={this.onChange} name={this.state.name} />
        <Greeting name={this.state.name} />
      </React.Fragment>
    );
  }
}

export default hot(module)(GreetingEditor);
