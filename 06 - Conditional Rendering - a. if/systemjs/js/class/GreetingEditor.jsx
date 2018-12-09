/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <input autoFocus onChange={this.onChange} value={this.state.name} />
        {// Only render when a name is truthy:
        this.state.name && <h1>Hello {this.state.name}!</h1>}
      </React.Fragment>
    );
  }
}
