/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createElement, Fragment } from 'react';

import Portal from './Portal.js';

export default class App extends Component {
  render() {
    return createElement(
      Fragment,
      null,
      'This is the React App.',
      createElement(Portal)
    );
  }
}
