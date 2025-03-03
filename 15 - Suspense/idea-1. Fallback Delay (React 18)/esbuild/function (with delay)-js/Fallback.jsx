/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useState, useEffect } from 'react';

function Fallback({ delay = 200 }) {
  const [show, setShow] = useState(false);

  useEffect(
    function () {
      setTimeout(() => setShow(true), delay);
    },
    [delay]
  );

  return show ? <div>Loading...</div> : null;
}

export default Fallback;
