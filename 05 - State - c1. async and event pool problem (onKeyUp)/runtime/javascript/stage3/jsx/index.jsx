/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class App extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { pressed: '' };
  onKeyUp = e => {
    this.setState(prevState => ({ pressed: prevState.pressed + e.key }));
  };

  render() {
    return (
      <React.Fragment>
        <input onKeyUp={this.onKeyUp} />
        <div>Pressed: {this.state.pressed}</div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
