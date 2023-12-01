/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { Component } from 'react';

class ClickMe extends Component {
  constructor(props) {
    /***/ console.log('constructor');

    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    /***/ console.log('handleClick() <begin>');

    // Updates are batched for performance reasons.
    // Therefore a callback should be used:
    this.setState(state => {
      /***/ console.log(
        'handleClick() - callback 1 setState: ' +
          JSON.stringify(this.state) +
          ' [state in callback: ' +
          JSON.stringify(state) +
          ']'
      );
      return { count: state.count + 0.4 };
    });
    this.setState(state => {
      /***/ console.log(
        'handleClick() - callback 2 setState: ' +
          JSON.stringify(this.state) +
          ' [state in callback: ' +
          JSON.stringify(state) +
          ']'
      );
      return { count: state.count + 0.6 };
    });

    /***/ console.log('handleClick() <end>: ' + JSON.stringify(this.state));
  }
  render() {
    /***/ console.log('render: ' + JSON.stringify(this.state));

    return (
      <button onClick={this.handleClick}>
        This link has been clicked {this.state.count} times
      </button>
    );
  }
}

export default ClickMe;
