/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */

import React from 'react';

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({ count: state.count + 1 }));
  }
  render() {
    return (
      <a onClick={this.handleClick}>
        {`This link has been clicked ${this.state.count} times`}
      </a>
    );
  }
}

export default ClickMe;
