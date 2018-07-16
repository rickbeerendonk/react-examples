/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class GreetingEditor extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { name: 'World' };
  onChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <input onChange={this.onChange} value={this.state.name} />
        {// Only render when a not-name is falsy:
        !this.state.name || <h1>Hello {this.state.name}!</h1>}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<GreetingEditor />, document.getElementById('app'));
