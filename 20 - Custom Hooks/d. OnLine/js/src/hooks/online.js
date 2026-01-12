/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

function useIsOnLine() {
  // OnLine state variable
  const [isOnLine, setIsOnLine] = useState(navigator.onLine);

  // Connect event handlers (side-effects)
  useEffect(() => {
    // Functions to change state
    function handleOnLine() {
      setIsOnLine(true);
    }
    function handleOffLine() {
      setIsOnLine(false);
    }

    window.addEventListener('online', handleOnLine);
    window.addEventListener('offline', handleOffLine);
    return () => {
      window.removeEventListener('online', handleOnLine);
      window.removeEventListener('offline', handleOffLine);
    };
  }, []);

  // Return current state
  return isOnLine;
}

export default useIsOnLine;
