/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';
import { flushSync } from 'react-dom';

class Child extends Component {
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

    if (this.props.onClick) {
      this.props.onClick();
    }
  }
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
          Open console to see that a property and a state change with sync lead
          to a double rerender.
        </p>
      </>
    );
  }
}

export default Child;
