/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import ColorContext from './color-context.tsx';

interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return (
    <ColorContext.Consumer>
      {context => <h1 style={{ color: context.color }}>Hello {name}!</h1>}
    </ColorContext.Consumer>
  );
}

export default Greeting;
