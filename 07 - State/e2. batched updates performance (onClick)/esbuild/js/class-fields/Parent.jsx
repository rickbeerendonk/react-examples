/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import Child from './Child.jsx';

class Parent extends Component {
  state = { count: 0 };
  handleClick = () => {
    // Batched:
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return <Child count={this.state.count} onClick={this.handleClick} />;
  }
}

export default Parent;
