/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2020 Rick Beerendonk     !*/

import React from 'react';

interface IGreetingProps {
  dark?: boolean;
  default: boolean;
  name: string;
}

const Greeting: React.FC<IGreetingProps> = ({
  dark,
  default: defaultProp,
  name
}) => (
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

export default Greeting;
