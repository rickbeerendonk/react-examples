/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, ReactNode } from 'react';

class Greeting extends Component {
  render(): ReactNode {
    return (
      <>
        <h1>Hello World!</h1>
        What do you think about React?
        <div>It looks amazing.</div>
      </>
    );
  }
}

export default Greeting;
