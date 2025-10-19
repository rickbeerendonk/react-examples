/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { PureComponent } from 'react';

class Child extends PureComponent {
  render() {
    /* eslint no-console:"off" */
    console.log(`Render ${this.props.name} at ${new Date()}`);

    return (
      <button onClick={() => this.props.onClick()}>
        Child {this.props.name}
      </button>
    );
  }
}

export default Child;
