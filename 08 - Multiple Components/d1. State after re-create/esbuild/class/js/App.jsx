/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import ClickMe from './ClickMe.jsx';

// Observe that after clicking the button twice,
// the ClickMe component is recreated with its initial state.

class App extends Component {
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
      <>
        <button onClick={this.handleClick}>Change visibility</button>
        <br />
        {this.state.showClickMe && <ClickMe />}
      </>
    );
  }
}
