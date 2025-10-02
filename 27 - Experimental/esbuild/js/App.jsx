/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

/*
 * EXPERIMENTAL FEATURE
 * useEffectEvent is not yet stable in React 19
 * This example shows the intended API for when it becomes stable
 */

import { useEffect, useState } from 'react';

// Simulating useEffectEvent (not available in stable React 19 yet)
// In the future, you would import: import { useEffectEvent } from 'react';
function useEffectEvent(fn) {
  const ref = { current: fn };

  useEffect(() => {
    ref.current = fn;
  });

  return (...args) => ref.current(...args);
}

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useEffectEvent creates a stable function that can access latest props/state
  // without causing the effect to re-run
  const onVisit = useEffectEvent(url => {
    // This function can access the latest `count` and `text`
    // without being a dependency of the effect
    console.log(`Visited ${url} - Count: ${count}, Text: ${text}`);
  });

  useEffect(() => {
    // This effect only runs when component mounts
    // onVisit is stable, so it doesn't cause re-runs
    const url = window.location.href;
    onVisit(url);

    // Note: In a real useEffect, you'd typically have some
    // subscription or event listener here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty deps - only runs once, but onVisit has latest values!

  return (
    <div>
      <h2>useEffectEvent (Experimental)</h2>
      <p style={{ color: 'red' }}>
        ⚠️ WARNING: useEffectEvent is EXPERIMENTAL and not yet in stable React
        19
      </p>
      <p>This example simulates the proposed API</p>

      <div>
        <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      </div>

      <div>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type something..."
        />
      </div>

      <hr />

      <h3>Why useEffectEvent?</h3>
      <p>It lets you extract non-reactive logic from effects, so you can:</p>
      <ul>
        <li>Access latest props/state without adding them to dependencies</li>
        <li>Prevent unnecessary effect re-runs</li>
        <li>Keep effects focused on reactive values only</li>
      </ul>

      <p>Check the console to see the onVisit calls</p>
    </div>
  );
}
