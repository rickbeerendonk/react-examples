/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useCallback, useEffect, useState } from 'react';

/* eslint no-console:"off" */
/* eslint react-compiler/react-compiler: off */

function Hello() {
  const [, forceUpdate] = useState(0);
  const [myH1, setMyH1] = useState();
  const [myH2, setMyH2] = useState();

  useEffect(() => {
    // Rerender every 2 seconds
    setInterval(() => forceUpdate(c => c + 1), 2000);
  }, []);

  useEffect(() => {
    if (myH1) {
      myH1.innerHTML = 'Hello <i>First</i>!!!';
    }
    if (myH2) {
      myH2.innerHTML = 'Hello <i>Second</i>!!!';
    }
  }, [myH1, myH2]);

  const setSecondCallbackRef = useCallback(ref => {
    console.log('callback ref 2nd: ' + new Date(), ref);
    setMyH2(ref);
  }, []);

  return (
    <>
      <h1
        ref={ref => {
          console.log('callback ref 1st: ' + new Date(), ref);
          setMyH1(ref);
        }}
      >
        Hello 1st!
      </h1>
      <h2 ref={setSecondCallbackRef}>Hello 2nd!</h2>
      <p>
        Callback ref: If it is a inline method, it is being called twice during
        updates. See the console to see the effect.
      </p>
      <p>
        Inline methods are recreated during render, so first call is to set the
        ref to null, second call is to set the new value.
      </p>
    </>
  );
}

export default Hello;
