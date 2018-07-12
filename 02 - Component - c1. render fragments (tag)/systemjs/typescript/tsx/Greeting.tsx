/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class Greeting extends React.Component<undefined, undefined> {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World!</h1>
        What do you think about React?
        <div>It looks amazing.</div>
      </React.Fragment>
    );
  }
}