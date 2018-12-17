/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import MyInput from './MyInput';

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    // Bind all non-react methods to this.
    this.handleBrowserChanged = this.handleBrowserChanged.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleBrowserChanged(e) {
    alert(e.target.value);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
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
