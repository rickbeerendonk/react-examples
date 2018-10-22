/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */
/* eslint react/prop-types:"off" */

import React from 'react';

export default class ClickMe extends React.Component {
  constructor(props) {
    /***/ console.log('constructor');

    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    /***/ console.log('onClick() <begin>');

    // Updates are batched for performance reasons.
    // Therefore this should be used:
    this.setState(state => {
      /***/ console.log(
        'onClick() - callback 1 setState: ' +
          JSON.stringify(this.state) +
          ' [state in callback: ' +
          JSON.stringify(state) +
          ']'
      );
      return { count: state.count + 0.5 };
    });
    this.setState(state => {
      /***/ console.log(
        'onClick() - callback 2 setState: ' +
          JSON.stringify(this.state) +
          ' [state in callback: ' +
          JSON.stringify(state) +
          ']'
      );
      return { count: state.count + 0.5 };
    });

    /***/ console.log('onClick() <end>: ' + JSON.stringify(this.state));
  }
  render() {
    /***/ console.log('render: ' + JSON.stringify(this.state));

    return (
      <a onClick={this.onClick}>
        {`This link has been clicked ${this.state.count} times`}
      </a>
    );
  }
}
