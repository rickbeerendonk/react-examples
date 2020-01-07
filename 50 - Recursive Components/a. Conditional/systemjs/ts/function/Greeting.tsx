/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

const Greeting: React.FC = () => {
  const [recursive, setRecursive] = React.useState(false);

  function handleClick() {
    setRecursive(true);
  }

  return (
    <React.Fragment>
      <h1 onClick={handleClick}>Hello World!</h1>
      {recursive && <Greeting />}
    </React.Fragment>
  );
};

export default Greeting;
