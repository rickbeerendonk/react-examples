/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createElement } from 'react';

export default class Visible extends Component {
  render() {
    return createElement(
      'h3',
      null,
      'I am a visible portal, shown outside the react root by an invisible component!'
    );
  }
}
