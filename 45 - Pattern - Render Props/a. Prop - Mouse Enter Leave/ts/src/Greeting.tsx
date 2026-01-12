/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

interface GreetingProps {
  name: string;
  highlight?: boolean;
}

function Greeting({ name, highlight }: GreetingProps) {
  return (
    <h1 style={highlight ? { color: 'red' } : undefined}>Hello {name}!</h1>
  );
}

export default Greeting;
