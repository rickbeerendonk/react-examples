/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

import { Component } from 'react';

class Greeting extends Component {
  render() {
    return [
      <h1 key="heading">Hello World!</h1>,
      'What do you think about React?',
      <div key="enthusiasm">It looks amazing.</div>
    ];
  }
}

export default Greeting;
