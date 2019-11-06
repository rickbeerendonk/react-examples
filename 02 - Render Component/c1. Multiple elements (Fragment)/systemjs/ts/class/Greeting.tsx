/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class Greeting extends React.Component<undefined, undefined> {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World!</h1>
        What do you think about React?
        <div>It looks amazing.</div>
      </React.Fragment>
    );
  }
}

export default Greeting;