/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import PropTypes from 'prop-types';
import React from 'react';

import { logEvent } from 'utils';

export default class Hello extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = { count: 1 };
    logEvent(
      `constructor(props: ${JSON.stringify(props)}, context: ${JSON.stringify(
        context
      )}) - state: ${JSON.stringify(this.state)}`
    );
  }
  render() {
    logEvent(
      `render() - props: ${JSON.stringify(this.props)} state: ${JSON.stringify(
        this.state
      )} context: ${JSON.stringify(this.context)}`,
      'rendering'
    );
    return (
      <h1>
        Hello {this.props.name}! ({this.state.count} time) ({this.context.value}{' '}
        = context)
      </h1>
    );
  }

  // Mounting
  UNSAFE_componentWillMount() {
    logEvent('componentWillMount()', 'mounting');
  }
  componentDidMount() {
    logEvent('componentDidMount()', 'mounting');
  }

  // Updating
  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    logEvent(
      `componentWillReceiveProps(nextProps: ${JSON.stringify(
        nextProps
      )}, nextContext: ${JSON.stringify(nextContext)})`,
      'updating'
    );
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    logEvent(
      `shouldComponentUpdate(nextProps: ${JSON.stringify(
        nextProps
      )}, nextState: ${JSON.stringify(
        nextState
      )}, nextContext: ${JSON.stringify(nextContext)}): boolean`,
      'updating'
    );
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    logEvent(
      `componentWillUpdate(nextProps: ${JSON.stringify(
        nextProps
      )}, nextState: ${JSON.stringify(
        nextState
      )}, nextContext: ${JSON.stringify(nextContext)})`,
      'updating'
    );
  }
  componentDidUpdate(prevProps, prevState, prevContext) {
    logEvent(
      `componentDidUpdate(prevProps: ${JSON.stringify(
        prevProps
      )}, prevState: ${JSON.stringify(
        prevState
      )}, prevContext: ${JSON.stringify(prevContext)})`,
      'updating'
    );
    if (
      prevProps.name === 'B' &&
      prevContext &&
      prevContext.value === 'Context One'
    ) {
      logEvent('-- new state --', 'action');
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }
  }

  // Unmounting
  componentWillUnmount() {
    logEvent('componentWillUnmount()', 'unmounting');
  }
}
Hello.contextTypes = {
  value: PropTypes.string
};
