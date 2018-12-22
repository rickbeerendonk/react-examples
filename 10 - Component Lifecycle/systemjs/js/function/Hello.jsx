/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import { logEvent } from 'utils';

function Hello(props) {
  const [count, setCount] = React.useState(1);
  React.useEffect(() => {
    logEvent(
      `useEffect - props: ${JSON.stringify(props)} - state: {count: ${count}}`
    );

    if (props.name === 'B' && count === 1) {
      logEvent('-- new state --', 'action');
      setCount(2);
    }

    return () => {
      logEvent('useEffect cleanup');
    };
  });

  logEvent(
    `render() - props: ${JSON.stringify(props)} - state: {count: ${count}}`,
    'rendering'
  );

  return (
    <h1 style={{ display: 'none' }}>
      Hello {props.name}! ({count} time)
    </h1>
  );
}

//////////////////

/*
class Hello2 extends React.Component {
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
*/

export default Hello;
