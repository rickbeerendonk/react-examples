/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

class MyComponent extends React.Component {
  render() {
    if (this.props.foo) {
      React.warn('This is a custom warning: foo is deprecated.');
    }
    return 'Check the console to see a warning plus a component call stack.';
  }
}

export default MyComponent;
