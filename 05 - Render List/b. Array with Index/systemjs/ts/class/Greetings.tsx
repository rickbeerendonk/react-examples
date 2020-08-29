/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingsProps {
  names: Array<string>;
}

class Greetings extends React.Component<IGreetingsProps> {
  render() {
    return (
      <>
        <h1>Greetings</h1>
        <ol>
          {
            // Prefer map (instead of for-loops):
            this.props.names.map((name, index) => (
              <li key={name} value={index}>
                Hello {name}
              </li>
            ))
          }
        </ol>
      </>
    );
  }
}

export default Greetings;
