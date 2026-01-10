/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk     !*/

interface GreetingProps {
  greeting: string;
  name: string;
}

function Greeting({ greeting, name }: GreetingProps) {
  return (
    <h1>
      {greeting} {name}!
    </h1>
  );
}

export default Greeting;
