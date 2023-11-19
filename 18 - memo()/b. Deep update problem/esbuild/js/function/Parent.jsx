/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import Child from './Child.jsx';
import ChildMemo from './ChildMemo.jsx';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.obj = {};
    this.state = { name: '' };
    this.nameChanged = this.nameChanged.bind(this);
  }
  nameChanged({ target: { value: name } }) {
    this.obj.name = name;
    this.setState({ name });
  }
  render() {
    return (
      <>
        <h1>Parent</h1>
        <div style={{ color: 'darkgray' }}>
          Observe that the child is not updated if it is a memo()-Component.
        </div>
        <div>
          <input
            autoFocus
            onChange={this.nameChanged}
            value={this.state.name}
          />
        </div>
        <Child obj={this.obj} />
        <ChildMemo obj={this.obj} />
      </>
    );
  }
}

export default Parent;
