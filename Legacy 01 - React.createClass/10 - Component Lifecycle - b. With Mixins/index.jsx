/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global createReactClass, React, ReactDOM */
/* eslint react/prop-types:"off", react/no-did-mount-set-state:"off" */

function logEvent(value, className) {
  var events = document.getElementById('events');
  var newEvent = document.createTextNode(value);
  var item = document.createElement('li');
  item.className = className;
  item.appendChild(newEvent);
  events.appendChild(item);
}

var Mixin1 = {
  // Initializing
  getDefaultProps: function() {
    logEvent('Mixin1: getDefaultProps()', 'mixin1 initializing');
    return {
      prop1:
        'Mixin1' /* Not allowed multiple times: prop2: 'Mixin1', prop3: 'Mixin1' */
    };
  },
  getInitialState: function() {
    logEvent('Mixin1: getInitialState()', 'mixin1 initializing');
    return {
      state1:
        'Mixin1' /* Not allowed multiple times: state2: 'Mixin1', state3: 'Mixin1' */
    };
  },

  // Mounting
  componentWillMount: function() {
    logEvent('Mixin1: componentWillMount()', 'mixin1 mounting');
  },
  componentDidMount: function() {
    logEvent('Mixin1: componentDidMount()', 'mixin1 mounting');
  },

  // Updating
  componentWillReceiveProps: function(/* nextProps */) {
    logEvent('Mixin1: componentWillReceiveProps(nextProps)', 'mixin1 updating');
  },
  /*** Not allowed multiple times ***
   shouldComponentUpdate: function (nextProps, nextState) {
      logEvent('Mixin1: shouldComponentUpdate(nextProps, nextState): boolean');
      return true;
  },
  */
  componentWillUpdate: function(/* nextProps, nextState */) {
    logEvent(
      'Mixin1: componentWillUpdate(nextProps, nextState)',
      'mixin1 updating'
    );
  },
  componentDidUpdate: function(/* prevProps, prevState */) {
    logEvent(
      'Mixin1: componentDidUpdate(prevProps, prevState)',
      'mixin1 updating'
    );
  },

  // Unmounting
  componentWillUnmount: function() {
    logEvent('Mixin1: componentWillUnmount()', 'mixin1 unmounting');
  }
};

var Mixin2 = {
  // Initializing
  getDefaultProps: function() {
    logEvent('Mixin2: getDefaultProps()', 'mixin2 initializing');
    return {
      prop2: 'Mixin2' /* Not allowed multiple times: prop3: 'Mixin2' */
    };
  },
  getInitialState: function() {
    logEvent('Mixin2: getInitialState()', 'mixin2 initializing');
    return {
      state2: 'Mixin2' /* Not allowed multiple times: state3: 'Mixin2' */
    };
  },

  // Mounting
  componentWillMount: function() {
    logEvent('Mixin2: componentWillMount()', 'mixin2 mounting');
  },
  componentDidMount: function() {
    logEvent('Mixin2: componentDidMount()', 'mixin2 mounting');
  },

  // Updating
  componentWillReceiveProps: function(/* nextProps */) {
    logEvent('Mixin2: componentWillReceiveProps(nextProps)', 'mixin2 updating');
  },
  /*** Not allowed multiple times ***
   shouldComponentUpdate: function (nextProps, nextState) {
      logEvent('Mixin2: shouldComponentUpdate(nextProps: ' + JSON.stringify(nextProps) + ', nextState: ' + JSON.stringify(nextState) + '): boolean');
      return true;
  },
  */
  componentWillUpdate: function(/* nextProps, nextState */) {
    logEvent(
      'Mixin2: componentWillUpdate(nextProps, nextState)',
      'mixin2 updating'
    );
  },
  componentDidUpdate: function(/* prevProps, prevState */) {
    logEvent(
      'Mixin2: componentDidUpdate(prevProps, prevState)',
      'mixin2 updating'
    );
  },

  // Unmounting
  componentWillUnmount: function() {
    logEvent('Mixin2: componentWillUnmount()', 'mixin2 unmounting');
  }
};

var Hello = createReactClass({
  mixins: [Mixin1, Mixin2],
  render: function() {
    logEvent(
      'Component: render() - props: ' +
        JSON.stringify(this.props) +
        ' state: ' +
        JSON.stringify(this.state),
      'rendering'
    );
    return <h1>Hello {this.props.name}!</h1>;
  },

  // Initializing
  getDefaultProps: function() {
    logEvent('Component: getDefaultProps()', 'initializing');
    return { prop3: 'Component' };
  },
  getInitialState: function() {
    logEvent('Component: getInitialState()', 'initializing');
    return { state3: 'Component' };
  },

  // Mounting
  UNSAFE_componentWillMount: function() {
    logEvent('Component: componentWillMount()', 'mounting');
  },
  componentDidMount: function() {
    logEvent('Component: componentDidMount()', 'mounting');
  },

  // Updating
  UNSAFE_componentWillReceiveProps: function(/* nextProps */) {
    logEvent('Component: componentWillReceiveProps(nextProps)', 'updating');
  },
  shouldComponentUpdate: function(/* nextProps, nextState */) {
    logEvent(
      'Component: shouldComponentUpdate(nextProps, nextState): boolean',
      'updating'
    );
    return true;
  },
  UNSAFE_componentWillUpdate: function(/* nextProps, nextState */) {
    logEvent(
      'Component: componentWillUpdate(nextProps, nextState)',
      'updating'
    );
  },
  componentDidUpdate: function(prevProps /* , prevState */) {
    logEvent('Component: componentDidUpdate(prevProps, prevState)', 'updating');
    if (prevProps.name === 'A') {
      logEvent('-- new state --', 'action');
      this.setState({ newState: true });
    }
  },

  // Unmounting
  componentWillUnmount: function() {
    logEvent('Component: componentWillUnmount()', 'unmounting');
  }
});

var App = createReactClass({
  getInitialState: function() {
    return {
      name: 'A'
    };
  },
  componentDidMount: function() {
    logEvent('-- new prop --', 'action');
    this.setState({ name: 'B' });
  },
  render: function() {
    return <Hello name={this.state.name} />;
  }
});

logEvent('-- add component --', 'action');
ReactDOM.render(<App />, document.getElementById('app'));

logEvent('-- remove component --', 'action');
ReactDOM.unmountComponentAtNode(document.getElementById('app'));
