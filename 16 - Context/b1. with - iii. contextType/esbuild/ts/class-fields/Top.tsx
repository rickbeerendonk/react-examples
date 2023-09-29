/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import ColorContext from './ColorContext.ts';
import Middle from './Middle.tsx';

interface TopProps {
  color: string;
}

interface TopState {
  color: string;
}

class Top extends Component<TopProps, TopState> {
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
      <ColorContext.Provider value={{ color: this.state.color }}>
        <Middle />
        <button onClick={this.handleSwitch}>Switch color</button>
      </ColorContext.Provider>
    );
  }
}

export default Top;
