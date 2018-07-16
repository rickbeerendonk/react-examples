/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class Greeting extends React.Component<undefined, undefined> {
  render() {
    return [
      <h1 key="heading">Hello World!</h1>,
      'What do you think about React?',
      <div key="enthusiasm">It looks amazing.</div>
    ];
  }
}
