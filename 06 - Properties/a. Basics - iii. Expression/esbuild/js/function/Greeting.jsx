/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function Greeting(props) {
  return (
    <h1>
      {props.greeting} {props.name}!
    </h1>
  );
}

export default Greeting;
