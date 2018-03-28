/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

function logEvent(value, className) {
  let events = document.getElementById('events');
  let newEvent = document.createTextNode(value);
  let item = document.createElement('li');
  item.className = className;
  item.appendChild(newEvent);
  events.appendChild(item);
}

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    logEvent(`constructor(${JSON.stringify(props)}) - state: ${JSON.stringify(this.state)}`);
  }
  render() {
    logEvent(`render() - props: ${JSON.stringify(this.props)} state: ${JSON.stringify(this.state)}`, 'rendering');
    return (<h1>Hello {this.props.name}! ({this.state.count}time)</h1>);
  }

  // Mounting
  componentDidMount() {
    logEvent('componentDidMount()', 'mounting');
  }

  // Updating
  static getDerivedStateFromProps(nextProps, prevState) {
    logEvent(`static getDerivedStateFromProps(nextProps: ${JSON.stringify(nextProps)}, prevState: ${JSON.stringify(prevState)}): newState | null`, 'updating');
    return null; // Or return new state
  }
  shouldComponentUpdate(nextProps, nextState) {
    logEvent(`shouldComponentUpdate(nextProps: ${JSON.stringify(nextProps)}, nextState: ${JSON.stringify(nextState)}): boolean`, 'updating');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    const result = {random: Math.random()};
    logEvent(`getSnapshotBeforeUpdate(prevProps: ${JSON.stringify(prevProps)}, prevState: ${JSON.stringify(prevState)}): $Shape<State> | null: ${JSON.stringify(result)}`, 'updating');
    return result;
  }
  componentDidUpdate(prevProps, prevState, userState) {
    logEvent(`componentDidUpdate(prevProps: ${JSON.stringify(prevProps)}, prevState: ${JSON.stringify(prevState)}, workInProgress: ${JSON.stringify(userState)})`, 'updating');
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Number One' };
  }
  componentDidMount() {
    logEvent('-- new prop --', 'action');
    this.setState({ name: 'Number Two' });
  }
  render() {
    return <Hello name={this.state.name} />;
  }
}

logEvent('-- add component --', 'action');
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

logEvent('-- remove component --', 'action');
ReactDOM.unmountComponentAtNode(
  document.getElementById('app')
);
