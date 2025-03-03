/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';
import { flushSync } from 'react-dom';

import Child from './Child.jsx';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Force sync:
    flushSync(() => {
      this.setState({ count: this.state.count + 1 });
    });
  }
  render() {
    return <Child count={this.state.count} onClick={this.handleClick} />;
  }
}

export default Parent;
