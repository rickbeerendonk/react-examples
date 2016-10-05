/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

var GreetingEditor = React.createClass({
  displayName: 'GreetingEditor',
  getInitialState: function () {
    return { name: 'World' };
  },
  onChange: function (e) {
    this.setState({ name: e.target.value });
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement('input', { onChange: this.onChange, value: this.state.name }),
      React.createElement('h1', null, 'Hello ', this.state.name, '!')
    );
  }
});

ReactDOM.render(
  React.createElement(GreetingEditor),
  document.getElementById('app')
);