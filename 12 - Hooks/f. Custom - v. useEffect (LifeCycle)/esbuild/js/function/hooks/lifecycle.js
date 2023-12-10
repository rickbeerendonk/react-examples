/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useEffect, useRef } from 'react';

function useLifecycle(
  afterMount,
  afterUpdate,
  beforeUnMountOrUpdate = () => {}
) {
  // Detect first change
  let firstRef = useRef(true);
  useEffect(
    () => {
      if (firstRef.current) {
        firstRef.current = false;
        // First change
        afterMount();
      } else {
        // Change, but not the first
        afterUpdate();
      }
      return () => {
        // Before update or unmount (unknown which)
        beforeUnMountOrUpdate();
      };
    }
    /* All updates, so no 2nd parameter */
  );
}

export default useLifecycle;
