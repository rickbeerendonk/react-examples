/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useEffect, useRef } from 'react';

export default function MyInput({
  onBrowserChanged,
  children,
  ...passthroughProps
}) {
  const inputRef = useRef();

  useEffect(
    function () {
      const input = inputRef.current;

      input.addEventListener('change', onBrowserChanged);

      return () => input.removeEventListener('change', onBrowserChanged);
    },
    [onBrowserChanged]
  );

  return (
    <input {...passthroughProps} ref={inputRef}>
      {children}
    </input>
  );
}
