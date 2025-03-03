/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import { logEvent } from './utils.js';

class Hello extends Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }

  // Mounting
  UNSAFE_componentWillMount() {
    logEvent('componentWillMount()');
  }

  // Updating
  UNSAFE_componentWillReceiveProps(nextProps) {
    logEvent(
      `componentWillReceiveProps(nextProps: ${JSON.stringify(nextProps)})`
    );
  }
  UNSAFE_componentWillUpdate(nextProps) {
    logEvent(`componentWillUpdate(nextProps: ${JSON.stringify(nextProps)})`);
  }
}

export default Hello;
