/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import MyInput from './MyInput.jsx';

class HelloMessage extends Component {
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
