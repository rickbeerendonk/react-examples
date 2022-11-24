/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2020 Rick Beerendonk     !*/

import React from 'react';

interface GreetingProps {
  dark?: boolean;
  default: boolean;
  name: string;
}

function Greeting(props: GreetingProps) {
  return (
    <>
      <h1
        style={{
          color: props.default ? 'red' : 'black',
          backgroundColor: props.dark ? 'gray' : 'white'
        }}
      >
        Hello {props.name}!
      </h1>
      <p>
        props.default: {JSON.stringify(props.default)}
        <br />
        props.dark: {JSON.stringify(props.dark)}
      </p>
    </>
  );
}

export default Greeting;
