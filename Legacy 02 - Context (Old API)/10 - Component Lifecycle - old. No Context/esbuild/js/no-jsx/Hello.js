/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createElement } from 'react';

import { logEvent } from './utils.js';

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    logEvent(
      `constructor(${JSON.stringify(props)}) - state: ${JSON.stringify(
        this.state
      )}`
    );
  }
  render() {
    logEvent(
      `render() - props: ${JSON.stringify(this.props)} state: ${JSON.stringify(
        this.state
      )}`,
      'rendering'
    );
    return createElement(
      'h1',
      null,
      'Hello ',
      this.props.name,
      '! ',
      this.state.count,
      ' time'
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
  UNSAFE_componentWillReceiveProps(nextProps) {
    logEvent(
      `componentWillReceiveProps(nextProps: ${JSON.stringify(nextProps)})`,
      'updating'
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    logEvent(
      `shouldComponentUpdate(nextProps: ${JSON.stringify(
        nextProps
      )}, nextState: ${JSON.stringify(nextState)}): boolean`,
      'updating'
    );
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    logEvent(
      `componentWillUpdate(nextProps: ${JSON.stringify(
        nextProps
      )}, nextState: ${JSON.stringify(nextState)})`,
      'updating'
    );
  }
  componentDidUpdate(prevProps, prevState) {
    logEvent(
      `componentDidUpdate(prevProps: ${JSON.stringify(
        prevProps
      )}, prevState: ${JSON.stringify(prevState)})`,
      'updating'
    );
    if (prevProps.name === 'A') {
      logEvent('-- new state --', 'action');
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }
  }

  // Unmounting
  componentWillUnmount() {
    logEvent('componentWillUnmount()', 'unmounting');
  }
}
