/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { PureComponent } from 'react';

import Bottom from './Bottom.jsx';

class Middle extends PureComponent {
  render() {
    return <Bottom />;
  }
}

export default Middle;
