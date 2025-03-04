/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", react/no-did-mount-set-state:"off" */

import { Component } from 'react';

import Hello from './Hello.jsx';
import { logEvent } from './utils.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'A' };
  }
  componentDidMount() {
    setTimeout(() => {
      logEvent('-- new prop --', 'action');
      this.setState({ name: 'B' });
    }, 100);
  }
  render() {
    return <Hello name={this.state.name} />;
  }
}
