/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class Child extends React.PureComponent {
  render() {
    return <div onClick={() => this.props.onClick()}>Child</div>;
  }
}

export default Child;
