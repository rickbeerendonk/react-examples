/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

function useIsDocumentHidden() {
  // Hidden state variable
  const [isHidden, setIsHidden] = useState(document.hidden);

  useEffect(() => {
    // Function to change state
    function handleVisibilityChange() {
      //console.log('Hook: ', document.hidden);
      setIsHidden(document.hidden);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Prevent race condition:
    setIsHidden(document.hidden);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Return current state
  return isHidden;
}

export default useIsDocumentHidden;
