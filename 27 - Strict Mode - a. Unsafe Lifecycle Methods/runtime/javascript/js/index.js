/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off", react/no-did-mount-set-state:"off" */

function logEvent(value) {
  let events = document.getElementById('events');
  let newEvent = document.createTextNode(value);
  let item = document.createElement('li');
  item.appendChild(newEvent);
  events.appendChild(item);
}

class Hello extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello ', this.props.name, '!');
  }

  // Mounting
  UNSAFE_componentWillMount() {
    logEvent('componentWillMount()');
  }

  // Updating
  UNSAFE_componentWillReceiveProps(nextProps) {
    logEvent(
      `componentWillReceiveProps(nextProps: ${JSON.stringify(nextProps)})`
    );
  }
  UNSAFE_componentWillUpdate(nextProps) {
    logEvent(`componentWillUpdate(nextProps: ${JSON.stringify(nextProps)})`);
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'One' };
  }
  componentDidMount() {
    this.setState({ name: 'Two' });
  }
  render() {
    return React.createElement(
      React.StrictMode,
      null,
      React.createElement(Hello, { name: this.state.name })
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
ReactDOM.unmountComponentAtNode(document.getElementById('app'));
