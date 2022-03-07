/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

function Fallback({ delay = 200 }) {
  const [show, setShow] = React.useState(false);

  React.useEffect(
    function () {
      setTimeout(() => setShow(true), delay);
    },
    [delay]
  );

  return show ? <div>Loading...</div> : null;
}

export default Fallback;
