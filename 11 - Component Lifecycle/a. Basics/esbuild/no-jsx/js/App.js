/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", react/no-did-mount-set-state:"off" */

import { Component, createElement } from 'react';

import Hello from './Hello.js';
import { logEvent } from './utils.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'A' };
  }
  componentDidMount() {
    logEvent('-- new prop --', 'action');
    this.setState({ name: 'B' });
  }
  render() {
    return createElement(Hello, { name: this.state.name });
  }
}
