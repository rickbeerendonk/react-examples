/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import './Greeting.css';

interface GreetingProps {
  name?: string;
}

function Greeting({ name }: GreetingProps) {
  if (!name) {
    throw new Error('No name provided');
  }

  return <h1 className="greeting">Hello {name}!</h1>;
}

export default Greeting;
