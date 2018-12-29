/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    // Bind all non-react methods to this.
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('input', {
        autoFocus: true,
        onChange: this.handleChange,
        value: this.state.name
      }),
      // Only render when a name is truthy:
      this.state.name &&
        React.createElement('h1', null, 'Hello ', this.state.name, '!')
    );
  }
}

export default GreetingEditor;
