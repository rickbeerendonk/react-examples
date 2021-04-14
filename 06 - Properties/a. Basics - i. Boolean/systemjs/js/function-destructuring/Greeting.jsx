/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function Greeting({ dark, default: defaultProp, name }) {
  return (
    <React.Fragment>
      <h1
        style={
          ({ color: defaultProp ? 'red' : 'black' },
          { backgroundColor: dark ? 'gray' : 'white' })
        }
      >
        Hello {name}!
      </h1>
      <p>
        props.default: {JSON.stringify(defaultProp)}
        <br />
        props.dark: {JSON.stringify(dark)}
      </p>
    </React.Fragment>
  );
}

export default Greeting;
