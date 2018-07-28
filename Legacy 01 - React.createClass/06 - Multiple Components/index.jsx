/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global createReactClass, React, ReactDOM */
/* eslint react/prop-types:"off" */

var EditBox = createReactClass({
  onChange(e) {
    this.props.onChange(e.target.value);
  },
  render: function() {
    return <input onChange={this.onChange} value={this.props.name} />;
  }
});

var Greeting = createReactClass({
  render: function() {
    return <h1>Hello {this.props.name}!</h1>;
  }
});

var GreetingEditor = createReactClass({
  getInitialState: function() {
    return { name: 'World' };
  },
  onChange: function(newName) {
    this.setState({ name: newName });
  },
  render: function() {
    return (
      <div>
        <EditBox onChange={this.onChange} name={this.state.name} />
        <Greeting name={this.state.name} />
      </div>
    );
  }
});

ReactDOM.render(<GreetingEditor />, document.getElementById('app'));
