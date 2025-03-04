/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createElement } from 'react';

import GreetingWithExtras from './GreetingWithExtras.js';

class App extends Component {
  render() {
    return createElement(GreetingWithExtras, {
      extraColor: 'red',
      name: 'World'
    });
  }
}
