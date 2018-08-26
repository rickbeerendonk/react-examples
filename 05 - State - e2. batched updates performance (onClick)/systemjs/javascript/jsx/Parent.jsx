/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import Child from './Child';

export default class ClicParentkMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    // Batched:
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  render() {
    return <Child count={this.state.count} onClick={this.onClick} />;
  }
}
