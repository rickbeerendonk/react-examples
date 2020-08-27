/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class Child extends React.PureComponent {
  render() {
    return <button onClick={() => this.props.onClick()}>Child</button>;
  }
}

export default Child;
