/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import ClickMe from './ClickMe.jsx';

// Observe that after clicking the button, the ClickMe component
// is recreated, due to having a different key, with its initial state.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ id: state.id + 1 }));
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Change ID</button>
        <br />
        <ClickMe key={this.state.id} />
      </>
    );
  }
}

export default App;
