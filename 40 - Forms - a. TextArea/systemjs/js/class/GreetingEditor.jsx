/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Europe\nWorld' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <textarea
          autoFocus
          onChange={this.handleChange}
          value={this.state.name}
        />
        <pre>Hello {this.state.name}!</pre>
      </React.Fragment>
    );
  }
}

export default GreetingEditor;
