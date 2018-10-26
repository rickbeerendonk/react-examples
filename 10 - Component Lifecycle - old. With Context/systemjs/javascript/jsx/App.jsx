/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/no-did-mount-set-state:"off" */

import PropTypes from 'prop-types';
import React from 'react';

import Hello from './Hello';
import { logEvent } from 'utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Number One', value: 'Context One' };
  }
  getChildContext() {
    // Never change context, as it can have problems:
    // https://facebook.github.io/react/docs/context.html
    return { value: this.state.value };
  }
  componentDidMount() {
    logEvent('-- new prop --', 'action');
    this.setState({ name: 'Number Two' });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.name === 'Number One' && this.state.name == 'Number Two') {
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
