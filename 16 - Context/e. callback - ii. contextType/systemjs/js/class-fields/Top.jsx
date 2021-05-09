/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';
import Middle from './Middle';

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };

    this.handleSwitch = this.handleSwitch.bind(this);
  }
  handleSwitch() {
    this.setState(state => ({
      color: state.color === 'red' ? 'green' : 'red'
    }));
  }
  render() {
    return (
      <ColorContext.Provider
        value={{ color: this.state.color, handleSwitch: this.handleSwitch }}
      >
        <Middle />
      </ColorContext.Provider>
    );
  }
}

export default Top;
