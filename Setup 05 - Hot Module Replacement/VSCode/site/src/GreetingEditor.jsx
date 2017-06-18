/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

'use strict';

import React from 'react';
import EditBox from './EditBox.jsx';
import Greeting from './Greeting.jsx';

/* eslint react/prop-types:"off" */

export default class GreetingEditor extends React.Component {
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
      <div>
        <EditBox onChange={this.onChange} name={this.state.name} />
        <Greeting name={this.state.name} />
      </div>
    );
  }
}
