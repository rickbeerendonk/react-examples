/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { PureComponent } from 'react';

class Child extends PureComponent {
  render() {
    return <button onClick={() => this.props.onClick()}>Child</button>;
  }
}

export default Child;
