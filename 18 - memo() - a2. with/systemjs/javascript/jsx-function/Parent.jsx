/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Child from './Child';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.nameChanged = this.nameChanged.bind(this);
  }
  nameChanged(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Parent</h1>
        <div style={{ color: 'darkgray' }}>
          Open the console and observe the number of Child renders when typing.
        </div>
        <div>
          <input onChange={this.nameChanged} value={this.state.name} />
        </div>
        <Child />
      </React.Fragment>
    );
  }
}
