/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class Greeting extends React.Component {
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('h1', null, 'Hello World!'),
      'What do you think about React?',
      React.createElement('div', null, 'It looks amazing.')
    );
  }
}
