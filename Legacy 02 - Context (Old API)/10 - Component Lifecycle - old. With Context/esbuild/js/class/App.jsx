/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/no-did-mount-set-state:"off" */

import PropTypes from 'prop-types';
import { Component } from 'react';

import Hello from './Hello.jsx';
import { logEvent } from './utils.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'A', value: 'Context One' };
  }
  getChildContext() {
    // Never change context, as it can have problems:
    // https://facebook.github.io/react/docs/context.html
    return { value: this.state.value };
  }
  componentDidMount() {
    logEvent('-- new prop --', 'action');
    this.setState({ name: 'B' });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.name === 'A' && this.state.name == 'B') {
      logEvent('-- new context --', 'action');
      this.setState({ value: 'Context Two' });
    }
  }
  render() {
    return <Hello name={this.state.name} />;
  }
}
App.childContextTypes = {
  value: PropTypes.string
};
