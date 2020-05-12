/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global createReactClass, React, ReactDOM */

var GreetingEditor = createReactClass({
  getInitialState: function () {
    return { name: 'World' };
  },
  handleChange: function (e) {
    this.setState({ name: e.target.value });
  },
  render: function () {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.name} />
        <h1>Hello {this.state.name}!</h1>
      </div>
    );
  }
});

ReactDOM.render(<GreetingEditor />, document.getElementById('app'));
