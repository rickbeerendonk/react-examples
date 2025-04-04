/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* eslint-disable react/prop-types */

import './Greeting.css';

function Greeting({ name }) {
  if (!name) {
    throw new Error('No name provided');
  }

  return <h1 className="greeting">Hello {name}!</h1>;
}

export default Greeting;
