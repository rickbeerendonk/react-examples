/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

export default class Visible extends Component {
  render() {
    return (
      <h3>
        I am a visible portal, shown outside the react root by an invisible
        component!
      </h3>
    );
  }
}
