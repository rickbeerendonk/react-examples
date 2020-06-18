/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import ClickMe from './ClickMe';

// Observe that after clicking the button, the ClickMe component
// is recreated, due to having a different key, with its initial state.

class App extends React.Component {
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
      <React.Fragment>
        <button onClick={this.handleClick}>Change ID</button>
        <br />
        <ClickMe key={this.state.id} />
      </React.Fragment>
    );
  }
}

export default App;
