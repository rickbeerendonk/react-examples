/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: '' };

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleKeyUp(e) {
    this.setState(state => ({ pressed: state.pressed + e.key }));
  }
  render() {
    return (
      <React.Fragment>
        <input onKeyUp={this.handleKeyUp} />
        <div>Pressed: {this.state.pressed}</div>
      </React.Fragment>
    );
  }
}

export default App;
