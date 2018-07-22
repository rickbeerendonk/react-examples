/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global createReactClass, React, ReactDOM */
/* eslint react/prop-types:"off" */

var HelloMessage = createReactClass({
  getInitialState: function() {
    return { name: 'World' };
  },
  onChange(e) {
    this.setState({ name: e.target.value });
  },
  render() {
    return (
      <div>
        <div>
          Not controlled by React:
          <input onChange={this.onChange} defaultValue={this.state.name} />
        </div>

        <div>
          Controlled by React:
          <input onChange={this.onChange} value={this.state.name} />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<HelloMessage />, document.getElementById('app'));
