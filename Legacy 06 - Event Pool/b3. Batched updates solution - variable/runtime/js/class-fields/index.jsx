/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

class App extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-instance_class_fields
  state = { pressed: '' };
  handleKeyUp = e => {
    const key = e.key;
    this.setState(state => ({ pressed: state.pressed + key }));
  };

  render() {
    return (
      <React.Fragment>
        <input autoFocus onKeyUp={this.handleKeyUp} />
        <div>Pressed: {this.state.pressed}</div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
