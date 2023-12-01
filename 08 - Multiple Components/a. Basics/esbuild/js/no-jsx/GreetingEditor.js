/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createElement, Fragment } from 'react';

import EditBox from './EditBox.js';
import Greeting from './Greeting.js';

class GreetingEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(name) {
    this.setState({ name });
  }
  render() {
    return createElement(
      Fragment,
      null,
      createElement(EditBox, {
        onChange: this.handleChange,
        value: this.state.name
      }),
      createElement(Greeting, { name: this.state.name })
    );
  }
}

export default GreetingEditor;
