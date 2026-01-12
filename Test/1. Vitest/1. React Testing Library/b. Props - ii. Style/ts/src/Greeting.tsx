/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

interface GreetingProps {
  name: string;
  selected?: boolean;
}

function Greeting({ name, selected }: GreetingProps) {
  return <h1 style={{ color: selected ? 'red' : 'black' }}>Hello {name}!</h1>;
}

export default Greeting;
