/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function Greeting() {
  const [recursive, setRecursive] = React.useState(false);

  function handleClick() {
    setRecursive(true);
  }

  return (
    <>
      <button onClick={handleClick} disabled={recursive}>
        Hello World!
      </button>
      {recursive && <Greeting />}
    </>
  );
}

export default Greeting;
