/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';
import Hello from './Hello.jsx';
import NameInput from './NameInput.jsx';

export default class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: props.name};

    // Bind all non-react methods to this.
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({name: e.target.value});
  }
  render() {
    return (
      <div>
        <NameInput onChange={this.onChange} name={this.state.name} />
        <Hello name={this.state.name} />                
      </div>
      );
  }
}