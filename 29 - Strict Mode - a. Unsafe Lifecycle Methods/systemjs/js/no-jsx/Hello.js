/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import { logEvent } from './utils';

class Hello extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello ', this.props.name, '!');
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
