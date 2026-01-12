/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

function Greeting({ name, highlight }) {
  return (
    <h1 style={highlight ? { color: 'red' } : undefined}>Hello {name}!</h1>
  );
}

export default Greeting;
