/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingProps {
  name?: string;
}

const Greeting: React.FC<IGreetingProps> = ({ name }) => (
  <React.Fragment>
    <h3>Greeting:</h3>
    <div>
      {
        // Change render based on name:
        name ? (
          <React.Fragment>
            <u>Hello</u> {name}!
          </React.Fragment>
        ) : (
          <span style={{ color: 'red' }}>No name provided.</span>
        )
      }
    </div>
  </React.Fragment>
);

export default Greeting;
