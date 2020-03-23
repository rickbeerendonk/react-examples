/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingsProps {
  names: Array<string>;
}

const Greetings: React.FC<IGreetingsProps> = ({ names }) => (
  <React.Fragment>
    <h1>Greetings</h1>
    <ul>
      {// Prefer map (instead of for-loops):
      (function () {
        const result = [];
        for (const name of names) {
          result.push(<li key={name}>Hello {name}</li>);
        }
        return result;
      })()}
    </ul>
  </React.Fragment>
);

export default Greetings;
