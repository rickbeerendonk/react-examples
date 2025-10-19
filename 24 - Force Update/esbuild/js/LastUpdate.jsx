/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useCallback, useEffect, useState } from 'react';

function useForceUpdate() {
  const [, setState] = useState(0);
  const forceUpdate = useCallback(() => {
    setState({});
  }, []);

  return forceUpdate;
}

function LastUpdate() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const intervalID = setInterval(forceUpdate, 2000);

    return () => clearInterval(intervalID);
  }, [forceUpdate]);

  return (
    <h1>
      Last update:{' '}
      {new Date().toString() /* Side effect, don't do this in render() */}
    </h1>
  );
}

export default LastUpdate;
