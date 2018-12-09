/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: '' };

    this.onKeyUp = this.onKeyUp.bind(this);
  }
  onKeyUp({ key }) {
    this.setState(state => ({ pressed: state.pressed + key }));
  }
  render() {
    return (
      <React.Fragment>
        <input autoFocus onKeyUp={this.onKeyUp} />
        <div>Pressed: {this.state.pressed}</div>
      </React.Fragment>
    );
  }
}
