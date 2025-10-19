/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

class GreetingEditor extends Component {
  state = { name: 'World' };
  handleChange = e => {
    //throw Error('wrong!');
    const value = e.target.value;
    this.setState(() => ({ name: value }));
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name === 'Error') {
      throw new Error('Error');
    }

    return true;
  }
  render() {
    const { name } = this.state;

    if (name === 'renderException') {
      throw new Error('render exception');
    }

    return (
      <>
        <input
          autoFocus
          key="input"
          onChange={this.handleChange}
          value={name}
        />
        {name && <h1 key="output">Hello {name}!</h1>}
      </>
    );
  }
}

export default GreetingEditor;
