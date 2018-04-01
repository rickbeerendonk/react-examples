/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    // Bind all non-react methods to this.
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('input', { onChange: this.onChange, value: this.state.name }),
      // Only render when a name is truthy:
      (this.state.name && React.createElement('h1', null, 'Hello ', this.state.name, '!'))
    );
  }
}
