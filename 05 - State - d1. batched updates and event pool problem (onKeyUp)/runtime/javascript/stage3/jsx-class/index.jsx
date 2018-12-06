/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

class App extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { pressed: '' };
  handleKeyUp = e => {
    this.setState(state => ({ pressed: state.pressed + e.key }));
  };

  render() {
    return (
      <React.Fragment>
        <input onKeyUp={this.handleKeyUp} />
        <div>Pressed: {this.state.pressed}</div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
