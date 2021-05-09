/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
  state = { count: 0 };
  handleClick = () => {
    // Force sync:
    ReactDOM.flushSync(() => {
      this.setState({ count: this.state.count + 1 });
    });

    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    /* eslint no-console:"off" */
    // Render will be called on every parent render!
    console.log('Child rendered: ' + Date());

    return (
      <React.Fragment>
        <button onClick={this.handleClick}>
          <div>{`Parent count: ${this.props.count}`}</div>
          <div>{`Child count: ${this.state.count}`}</div>
        </button>
        <p>
          Open console to see that a property and a state change with sync lead
          to a double rerender.
        </p>
      </React.Fragment>
    );
  }
}

export default Child;
