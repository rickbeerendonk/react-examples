/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class HelloMessage extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { name: 'World' };
  onChange = (e) => {
    this.setState({ name: e.target.value });
  };
  
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
}

ReactDOM.render(
  <HelloMessage />,
  document.getElementById('app')
);