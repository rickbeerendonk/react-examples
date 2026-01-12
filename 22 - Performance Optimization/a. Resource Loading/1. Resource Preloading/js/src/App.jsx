/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { preloadModule, preinitModule } from 'react-dom';

export default function App() {
  // Preload: Fetch ESM module without executing it
  preloadModule('/modules/a.js');

  // Preinit: Fetch AND execute ESM module immediately
  preinitModule('/modules/b.js');

  return (
    <div>
      <h2>ESM Module Preloading</h2>
      <p>This page demonstrates ESM module preloading and preinit:</p>
      <ul>
        <li>
          <code>preloadModule</code> - Fetch ESM module without executing
        </li>
        <li>
          <code>preinitModule</code> - Fetch and execute ESM module
        </li>
      </ul>
      <p>Check the results:</p>
      <ul>
        <li>Network tab - observe module loading and execution</li>
        <li>Console tab - see which modules logged their messages</li>
        <li>
          Elements tab - look for modulepreload hints in HTML &lt;head&gt;
        </li>
      </ul>
    </div>
  );
}
