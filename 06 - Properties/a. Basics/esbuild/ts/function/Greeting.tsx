/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

interface GreetingProps {
  name: string;
}

function Greeting(props: GreetingProps) {
  return <h1>Hello {props.name}!</h1>;
}

export default Greeting;
