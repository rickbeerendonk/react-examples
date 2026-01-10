/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk     !*/

interface GreetingProps {
  count: number;
  name: string;
}

function Greeting(props: GreetingProps) {
  return <h1>Hello {Array(props.count).fill(props.name).join(' ')}!</h1>;
}

export default Greeting;
