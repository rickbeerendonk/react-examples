/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingProps {
  name?: string;
}

const Greeting: React.FC<IGreetingProps> = ({ name }) => (
  <>
    <h3>Greeting:</h3>
    {
      // Change render based on name:
      (function () {
        if (name) {
          return <div>Hello {name}!</div>;
        } else {
          return <div style={{ color: 'red' }}>No name provided.</div>;
        }
      })()
    }
  </>
);

export default Greeting;
