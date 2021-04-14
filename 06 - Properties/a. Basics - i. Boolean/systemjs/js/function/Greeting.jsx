/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function Greeting(props) {
  return (
    <React.Fragment>
      <h1
        style={
          ({ color: props.default ? 'red' : 'black' },
          { backgroundColor: props.dark ? 'gray' : 'white' })
        }
      >
        Hello {props.name}!
      </h1>
      <p>
        props.default: {JSON.stringify(props.default)}
        <br />
        props.dark: {JSON.stringify(props.dark)}
      </p>
    </React.Fragment>
  );
}

export default Greeting;
