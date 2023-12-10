/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import { logEvent } from './utils.js';

class Hello extends Component {
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
    return (
      <h1>
        Hello {this.props.name}! ({this.state.count}
        time)
      </h1>
    );
  }

  // Mounting
  componentDidMount() {
    logEvent('componentDidMount()', 'mounting');
  }

  // Updating
  static getDerivedStateFromProps(nextProps, prevState) {
    logEvent(
      `static getDerivedStateFromProps(nextProps: ${JSON.stringify(
        nextProps
      )}, prevState: ${JSON.stringify(prevState)}): newState | null`,
      'updating'
    );
    return null; // Or return new state
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
  getSnapshotBeforeUpdate(prevProps, prevState) {
    const result = { random: Math.random() };
    logEvent(
      `getSnapshotBeforeUpdate(prevProps: ${JSON.stringify(
        prevProps
      )}, prevState: ${JSON.stringify(
        prevState
      )}): $Shape<State> | null: ${JSON.stringify(result)}`,
      'updating'
    );
    return result;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    logEvent(
      `componentDidUpdate(prevProps: ${JSON.stringify(
        prevProps
      )}, prevState: ${JSON.stringify(prevState)}, snapshot: ${JSON.stringify(
        snapshot
      )})`,
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

export default Hello;
