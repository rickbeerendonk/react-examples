/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import EditBox from './EditBox';
import Greeting from './Greeting';

class GreetingEditor extends React.Component {
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

export default GreetingEditor;
