/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import MyInput from './MyInput';

export default class HelloMessage extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { name: 'World' };
  onBrowserChanged = e => {
    alert(e.target.value);
  };
  onChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          Not controlled by React:
          <MyInput
            onChange={this.onChange}
            onBrowserChanged={this.onBrowserChanged}
            defaultValue={this.state.name}
          />
        </div>

        <div>
          Controlled by React:
          <MyInput
            onChange={this.onChange}
            onBrowserChanged={this.onBrowserChanged}
            value={this.state.name}
          />
        </div>
      </div>
    );
  }
}
