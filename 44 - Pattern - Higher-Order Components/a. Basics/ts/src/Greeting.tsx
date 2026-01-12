/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return <h1>Hello {name}!</h1>;
}

export default Greeting;
