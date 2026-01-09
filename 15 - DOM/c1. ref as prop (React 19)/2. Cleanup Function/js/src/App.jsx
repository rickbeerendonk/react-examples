/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Ref Cleanup Function (React 19)</h2>
      <p>In React 19, ref callbacks can return a cleanup function</p>

      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Input
      </button>

      {show && (
        <input
          ref={element => {
            if (element) {
              console.log('Input mounted:', element);
              element.focus();

              // React 19: Return cleanup function from ref callback
              return () => {
                console.log('Input cleanup (unmounting):', element);
              };
            }
          }}
          placeholder="Check console for ref lifecycle"
        />
      )}

      <p>Toggle the input and check the console for ref creation and cleanup</p>
    </div>
  );
}
