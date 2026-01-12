/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

interface GreetingProps {
  name?: string;
}

function Greeting({ name = 'World' }: GreetingProps) {
  return <h1>Hello {name}!</h1>;
}

export default Greeting;
