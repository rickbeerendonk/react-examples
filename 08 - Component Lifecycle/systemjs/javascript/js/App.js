/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import Hello from './Hello';
import { logEvent } from './utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Number One' };
  }
  componentDidMount() {
    logEvent('-- new prop --', 'action');
    this.setState({ name: 'Number Two' });
  }
  render() {
    return React.createElement(Hello, { name: this.state.name });
  }
}
