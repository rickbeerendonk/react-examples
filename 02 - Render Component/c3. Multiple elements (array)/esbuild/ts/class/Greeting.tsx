/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

import { Component, ReactNode } from 'react';

class Greeting extends Component {
  render(): ReactNode {
    return [
      <h1 key="heading">Hello World!</h1>,
      'What do you think about React?',
      <div key="enthusiasm">It looks amazing.</div>
    ];
  }
}

export default Greeting;
