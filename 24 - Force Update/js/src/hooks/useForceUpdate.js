/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useCallback, useState } from 'react';

function useForceUpdate() {
  const [, setState] = useState(0);
  const forceUpdate = useCallback(() => {
    setState({});
  }, []);

  return forceUpdate;
}

export default useForceUpdate;
