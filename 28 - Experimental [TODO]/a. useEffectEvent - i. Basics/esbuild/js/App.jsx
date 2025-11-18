/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

/* useEffectEvent is now available in React 19.2+ */

import { useEffect, useEffectEvent, useState } from 'react';

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
      <h2>useEffectEvent</h2>
      <p>Available in React 19.2+</p>

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
