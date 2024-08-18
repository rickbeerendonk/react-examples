/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export interface GreetingProps {
  greet?: string;
  name: string;
}

function Greeting(props: GreetingProps) {
  return (
    <i>
      {props.greet} {props.name}
    </i>
  );
}

export default Greeting;
