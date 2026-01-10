/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function Greeting({ count, name }) {
  return <h1>Hello {Array(count).fill(name).join(' ')}!</h1>;
}

export default Greeting;
