/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020-2021 Rick Beerendonk          !*/

import type { MouseEvent } from 'react';

export default function App() {
  function handleMouseDown(e: MouseEvent<HTMLButtonElement>) {
    alert(`Button ${(e.target as HTMLElement).innerText} mouse down!`);
  }

  return (
    <>
      {[1, 2, 3].map(nr => (
        <button key={nr} onMouseDown={handleMouseDown}>
          {nr}
        </button>
      ))}

      <div style={{ color: 'gray' }}>
        <p>
          Open console, tab &quot;Elements&quot;, sub-tab &quot;Event
          Listeners&quot;.
        </p>
        <div>
          Observe:
          <ul>
            <li>Buttons don&apos;t have event handlers.</li>
            <li>All event handlers are on the React root.</li>
          </ul>
        </div>
        <p>
          Remove the MouseDown event listeners on the React root and observe the
          clicks no longer work.
        </p>
      </div>
    </>
  );
}
