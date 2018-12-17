/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import EditBox from './EditBox';
import Greeting from './Greeting';

export default class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(name) {
    this.setState({ name });
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(EditBox, {
        onChange: this.handleChange,
        value: this.state.name
      }),
      React.createElement(Greeting, { name: this.state.name })
    );
  }
}
