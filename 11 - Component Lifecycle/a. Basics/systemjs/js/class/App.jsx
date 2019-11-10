/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", react/no-did-mount-set-state:"off" */

import React from 'react';

import Hello from './Hello';
import { logEvent } from 'utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'A' };
  }
  componentDidMount() {
    logEvent('-- new prop --', 'action');
    this.setState({ name: 'B' });
  }
  render() {
    return <Hello name={this.state.name} />;
  }
}

export default App;
