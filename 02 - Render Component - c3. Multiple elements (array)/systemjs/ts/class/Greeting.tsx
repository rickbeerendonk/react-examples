/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class Greeting extends React.Component<undefined, undefined> {
  render(): (string | JSX.Element)[] {
    return [
      <h1 key="heading">Hello World!</h1>,
      'What do you think about React?',
      <div key="enthusiasm">It looks amazing.</div>
    ];
  }
}

export default Greeting;
