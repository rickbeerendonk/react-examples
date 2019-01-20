/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './color-context';
import Two from './Two';
import Three from './Three';

class One extends React.Component {
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
      <React.Fragment>
        <ColorContext.Provider value={{ color: 'blue' }}>
          <ColorContext.Provider value={{ color: this.state.color }}>
            <Two />
            <button onClick={this.handleSwitch}>Switch color</button>
          </ColorContext.Provider>

          <Three />
        </ColorContext.Provider>

        <Three />
      </React.Fragment>
    );
  }
}

export default One;
