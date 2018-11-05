/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Child from './Child';
import ChildMemo from './ChildMemo';

export default class Parent extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  obj = {};
  state = { name: '' };
  nameChanged = ({ target: { value: name } }) => {
    this.obj.name = name;
    this.setState({ name });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Parent</h1>
        <div style={{ color: 'darkgray' }}>
          Observe that the child is not updated if it is a PureComponent.
        </div>
        <div>
          <input onChange={this.nameChanged} value={this.state.name} />
        </div>
        <Child obj={this.obj} />
        <ChildMemo obj={this.obj} />
      </React.Fragment>
    );
  }
}
