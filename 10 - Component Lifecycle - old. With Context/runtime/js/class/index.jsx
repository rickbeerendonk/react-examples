/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */
/* eslint react/prop-types:"off", react/no-did-mount-set-state:"off" */

function logEvent(value, className) {
  let events = document.getElementById('events');
  let newEvent = document.createTextNode(value);
  let item = document.createElement('li');
  item.className = className;
  item.appendChild(newEvent);
  events.appendChild(item);
}

class Hello extends React.Component {
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
      prevProps.name === 'Number Two' &&
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

class App extends React.Component {
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

logEvent('-- add component --', 'action');
ReactDOM.render(<App />, document.getElementById('app'));

logEvent('-- remove component --', 'action');
ReactDOM.unmountComponentAtNode(document.getElementById('app'));
