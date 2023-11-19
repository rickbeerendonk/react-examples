/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

import { Component, memo } from 'react';

class Child extends Component {
  render() {
    console.log('Render Child');
    return <h2>Child</h2>;
  }
}

const ChildMemo = memo(Child /* no custom comparison (2nd parameter) */);

export default ChildMemo;
