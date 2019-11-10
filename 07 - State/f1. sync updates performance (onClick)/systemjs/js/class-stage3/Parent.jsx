/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Child from './Child';

class Parent extends React.Component {
  state = { count: 0 };
  handleClick = () => {
    // Force sync:
    ReactDOM.flushSync(() => {
      this.setState({ count: this.state.count + 1 });
    });
  };

  render() {
    return <Child count={this.state.count} onClick={this.handleClick} />;
  }
}

export default Parent;
