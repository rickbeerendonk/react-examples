/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

var Greeting = React.createClass({
  displayName: 'Greeting',
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
      React.createElement('h1', null, 'Hello ', React.createElement('span', { dangerouslySetInnerHTML: { __html: this.state.name } }), '!')
    );
  }
});

ReactDOM.render(
  React.createElement(Greeting),
  document.getElementById('app')
);