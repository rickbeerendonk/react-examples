/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useEffect, useRef } from 'react';

export default function useFlashRef() {
  const ref = useRef();

  useEffect(() => {
    ref.current.style.transition = 'none';
    ref.current.style.backgroundColor = '#d676ff';

    setTimeout(() => {
      ref.current.style.transition = 'background 0.7s';
      ref.current.style.backgroundColor = '';
    });
  });

  return ref;
}
