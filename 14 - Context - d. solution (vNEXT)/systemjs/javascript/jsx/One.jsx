/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import ColorContext from './color-context';
import Two from './Two';

export default class One extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };

    this.onSwitch = this.onSwitch.bind(this);
  }
  onSwitch() {
      this.setState(prevState => ({ color: prevState.color === 'red' ? 'green' : 'red' }));
  }
  render() {
    return (
      <ColorContext.Provider value={{color: this.state.color}}>
        <Two />
        <button onClick={this.onSwitch}>Switch color</button>
      </ColorContext.Provider>
    );
  }
}
