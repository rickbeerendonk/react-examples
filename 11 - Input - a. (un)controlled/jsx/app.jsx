/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

var HelloMessage = React.createClass({
  getInitialState: function () {
    return { name: 'World' };
  },
  onChange(e) {
    this.setState({ name: e.target.value });
  },
  render() {
    return (
      <div>
        {/* Not controlled by React */}
        <input onChange={this.onChange} defaultValue={this.state.name} />

        {/* Controlled by React */}
        <input onChange={this.onChange} value={this.state.name} />
      </div>
    );
  }
});

ReactDOM.render(
  <HelloMessage />,
  document.getElementById('app')
);