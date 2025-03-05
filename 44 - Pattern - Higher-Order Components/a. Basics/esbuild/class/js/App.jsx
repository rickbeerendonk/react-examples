/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import GreetingWithExtras from './GreetingWithExtras.jsx';

export default class App extends Component {
  render() {
    return <GreetingWithExtras extraColor="red" name="World" />;
  }
}
