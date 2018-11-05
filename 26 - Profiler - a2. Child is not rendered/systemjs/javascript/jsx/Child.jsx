/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class Child extends React.PureComponent {
  render() {
    return <div onClick={() => this.props.onClick()}>Child</div>;
  }
}
