/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global createReactClass, React, ReactDOM */

var GreetingEditor = createReactClass({
  getInitialState: function() {
    return { name: 'World' };
  },
  onChange: function(e) {
    this.setState({ name: e.target.value });
  },
  render: function() {
    return (
      <div>
        <input onChange={this.onChange} value={this.state.name} />
        <h1>Hello {this.state.name}!</h1>
      </div>
    );
  }
});

ReactDOM.render(<GreetingEditor />, document.getElementById('app'));
