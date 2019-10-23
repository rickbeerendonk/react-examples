/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <input autoFocus onChange={this.handleChange} value={this.state.name} />
        {// Change render based on name:
        this.state.name ? (
          <h1>Hello {this.state.name}!</h1>
        ) : (
          <h1 style={{ color: 'red' }}>No name provided.</h1>
        )}
      </React.Fragment>
    );
  }
}

export default GreetingEditor;
