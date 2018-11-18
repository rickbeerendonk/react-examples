/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class Child extends React.PureComponent {
  render() {
    /* eslint no-console:"off" */
    console.log(`Render ${this.props.name} at ${new Date()}`);

    return (
      <div onClick={() => this.props.onClick()}>Child {this.props.name}</div>
    );
  }
}
