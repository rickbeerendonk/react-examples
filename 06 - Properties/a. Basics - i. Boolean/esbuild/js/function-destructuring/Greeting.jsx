/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function Greeting({ dark, default: defaultProp, name }) {
  return (
    <>
      <h1
        style={{
          color: defaultProp ? 'red' : 'black',
          backgroundColor: dark ? 'gray' : 'white'
        }}
      >
        Hello {name}!
      </h1>
      <p>
        defaultProp: {JSON.stringify(defaultProp)}
        <br />
        dark: {JSON.stringify(dark)}
      </p>
    </>
  );
}

export default Greeting;
