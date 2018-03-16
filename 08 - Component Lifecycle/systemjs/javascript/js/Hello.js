/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import { logEvent } from './utils';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    logEvent(`constructor(${JSON.stringify(props)}) - state: ${JSON.stringify(this.state)}`);
  }
  render() {
    logEvent(`render() - props: ${JSON.stringify(this.props)} state: ${JSON.stringify(this.state)}`, 'rendering');
    return React.createElement('h1', null, 'Hello ', this.props.name, '! ', this.state.count, ' time');
  }

  // Mounting
  componentDidMount() {
    logEvent('componentDidMount()', 'mounting');
  }

  // Updating
  shouldComponentUpdate(nextProps, nextState) {
    logEvent(`shouldComponentUpdate(nextProps: ${JSON.stringify(nextProps)}, nextState: ${JSON.stringify(nextState)}): boolean`, 'updating');
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    logEvent(`componentDidUpdate(prevProps: ${JSON.stringify(prevProps)}, prevState: ${JSON.stringify(prevState)})`, 'updating');
    if (prevProps.name === 'Number One') {
      logEvent('-- new state --', 'action');
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }
  }

  // Unmounting
  componentWillUnmount() {
    logEvent('componentWillUnmount()', 'unmounting');
  }
}
