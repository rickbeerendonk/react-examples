/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

class MyComponent extends React.Component {
  render() {
    if (this.props.foo) {
      React.error('This is a custom error: foo is deprecated.');
    }
    return 'Check the console to see an error plus a component call stack.';
  }
}

export default MyComponent;
