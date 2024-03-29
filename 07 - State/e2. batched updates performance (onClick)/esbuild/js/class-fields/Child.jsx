/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

class Child extends Component {
  state = { count: 0 };
  handleClick = () => {
    // Batched:
    this.setState(state => ({ count: state.count + 1 }));

    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    /* eslint no-console:"off" */
    // Render will be called on every parent render!
    console.log('Child rendered: ' + Date());

    return (
      <>
        <button onClick={this.handleClick}>
          <div>{`Parent count: ${this.props.count}`}</div>
          <div>{`Child count: ${this.state.count}`}</div>
        </button>
        <p>
          Open console to see that a property and a state change in quick
          succession only lead to one rerender.
        </p>
      </>
    );
  }
}

export default Child;
