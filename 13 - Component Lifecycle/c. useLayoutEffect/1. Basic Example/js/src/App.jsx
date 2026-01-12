/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useLayoutEffect, useRef, useState } from 'react';

export default function App() {
  const [show, setShow] = useState(true);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      // Measure and adjust layout before browser paints
      const { height } = divRef.current.getBoundingClientRect();
      console.log('Height measured in useLayoutEffect:', height);

      // This runs synchronously before paint
      divRef.current.style.backgroundColor =
        height > 50 ? 'lightblue' : 'lightcoral';
    }
  }, [show]);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && (
        <div ref={divRef} style={{ padding: '20px' }}>
          <p>This div's background color is set based on its height.</p>
          <p>useLayoutEffect measures and updates BEFORE the browser paints,</p>
          <p>preventing visual flicker.</p>
        </div>
      )}
      <p>Check console for height measurements</p>
    </div>
  );
}
