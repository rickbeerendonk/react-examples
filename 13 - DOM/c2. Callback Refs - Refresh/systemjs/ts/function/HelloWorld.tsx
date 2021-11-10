/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

const HelloWorld: React.FC = () => {
  const [id, setId] = React.useState(0);

  function handleRef(ref) {
    console.log(ref);
    if (ref) {
      ref.innerHTML = 'Hello <u>React</u>!!!';
    }
  }

  return (
    <>
      <h1 ref={handleRef} key={id}>
        Hello World!
      </h1>
      <button onClick={() => setId(v => v + 1)}>Refresh</button>
    </>
  );
};

export default HelloWorld;
