/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import EditBox from './EditBox';
import Greeting from './Greeting';

export default class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  onChange(name) {
    this.setState(() => ({ name }));
  }
  render() {
    return React.createElement('div', null,
      React.createElement(EditBox, { onChange: this.onChange, value: this.state.name }),
      React.createElement(Greeting, { name: this.state.name })
    );
  }
}
