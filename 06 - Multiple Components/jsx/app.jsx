/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

var EditBox = React.createClass({
  onChange(e) {
    this.props.onChange(e.target.value);
  },
  render: function () {
    return (
      <input onChange={this.onChange} value={this.props.name} />
    );
  }
});

var Greeting = React.createClass({
  render: function () {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
});

var GreetingEditor = React.createClass({
  getInitialState: function () {
    return { name: 'World' };
  },
  onChange: function (newName) {
    this.setState({ name: newName });
  },
  render: function () {
    return (
      <div>
        <EditBox onChange={this.onChange} name={this.state.name} />
        <Greeting name={this.state.name} />
      </div>
    );
  }
});

ReactDOM.render(
  <GreetingEditor />,
  document.getElementById('app')
);
