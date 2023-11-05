/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { Component } from 'react';

class Child extends Component {
  state = { count: 0 };
  handleClick = () => {
    // Batched:
    this.setState(
      state => {
        console.log('getValue: Child - first');
        return { count: state.count + 0.6 };
      },
      () => console.log('Child - first')
    );

    if (this.props.onClick) {
      this.props.onClick();
    }

    this.setState(
      state => {
        console.log('getValue: Child - second');
        return { count: state.count + 0.4 };
      },
      () => console.log('Child - second')
    );
  };

  render() {
    // Render will be called once!
    console.log('render: Child');

    return (
      <button onClick={this.handleClick}>
        <div>{`Parent count: ${this.props.count}`}</div>
        <div>{`Child count: ${this.state.count}`}</div>
      </button>
    );
  }
}

export default Child;
