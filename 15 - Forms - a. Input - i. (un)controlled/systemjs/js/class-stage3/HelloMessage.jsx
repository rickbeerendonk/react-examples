/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class HelloMessage extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { name: 'World' };
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          Not controlled by React:
          <input
            autoFocus
            onChange={this.handleChange}
            defaultValue={this.state.name}
          />
        </div>

        <div>
          Controlled by React:
          <input onChange={this.handleChange} value={this.state.name} />
        </div>

        <div style={{ color: 'darkgray' }}>State = {this.state.name}</div>
      </div>
    );
  }
}

export default HelloMessage;
