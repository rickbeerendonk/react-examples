/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

import { PureComponent } from 'react';

class Child extends PureComponent {
  render() {
    console.log('Render Child');
    return <h2>Child</h2>;
  }
}

export default Child;
