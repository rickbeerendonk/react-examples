/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import ClickMe from './ClickMe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showClickMe: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ showClickMe: !state.showClickMe }));
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Click me!</button>
        <br />
        {this.state.showClickMe && <ClickMe />}
      </React.Fragment>
    );
  }
}

export default App;
