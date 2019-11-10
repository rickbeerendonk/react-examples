/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import MyInput from './MyInput';

class HelloMessage extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-instance_class_fields
  state = { name: 'World' };
  handleBrowserChanged = e => {
    alert(e.target.value);
  };
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          Not controlled by React:
          <MyInput
            autoFocus
            onChange={this.handleChange}
            onBrowserChanged={this.handleBrowserChanged}
            defaultValue={this.state.name}
          />
        </div>

        <div>
          Controlled by React:
          <MyInput
            onChange={this.handleChange}
            onBrowserChanged={this.handleBrowserChanged}
            value={this.state.name}
          />
        </div>
      </div>
    );
  }
}

export default HelloMessage;
