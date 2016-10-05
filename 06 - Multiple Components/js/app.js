/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

var EditBox = React.createClass({
  displayName: 'EditBox',
  render: function () {
    return React.createElement('input', { onChange: this.props.onChange, value: this.props.name });
  }
});

var Greeting = React.createClass({
  displayName: 'Greeting',
  render: function () {
    return React.createElement('h1', null, 'Hello ', this.props.name, '!');
  }
});

var GreetingEditor = React.createClass({
  displayName: 'GreetingEditor',
  getInitialState: function () {
    return { name: 'World' };
  },
  onChange: function (e) {
    this.setState({ name: e.target.value });
  },
  render: function () {
    return React.createElement('div', null,
      React.createElement(EditBox, { onChange: this.onChange, name: this.state.name }),
      React.createElement(Greeting, { name: this.state.name })
    );
  }
});

ReactDOM.render(
  React.createElement(GreetingEditor),
  document.getElementById('app')
);