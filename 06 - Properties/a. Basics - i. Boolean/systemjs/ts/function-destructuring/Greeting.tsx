/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2020 Rick Beerendonk     !*/

import React from 'react';

interface GreetingProps {
  dark?: boolean;
  default: boolean;
  name: string;
}

function Greeting({ dark, default: defaultProp, name }: GreetingProps) {
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
        props.default: {JSON.stringify(defaultProp)}
        <br />
        props.dark: {JSON.stringify(dark)}
      </p>
    </>
  );
}

export default Greeting;
