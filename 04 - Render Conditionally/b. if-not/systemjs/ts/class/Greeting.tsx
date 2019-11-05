/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingProps {
  name?: string;
}

class Greeting extends React.Component<IGreetingProps> {
  render() {
    return (
      <React.Fragment>
        <h3>Greeting:</h3>
        {// Only render when a not-name is falsy:
        !this.props.name || <div>Hello {this.props.name}!</div>}
      </React.Fragment>
    );
  }
}

export default Greeting;
