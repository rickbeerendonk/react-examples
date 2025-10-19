/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { preloadModule, preinitModule } from 'react-dom';

export default function App() {
  // Preload ESM modules (doesn't execute them)
  preloadModule('/modules/chart.js');
  preloadModule('/modules/utils.js', { as: 'script' });

  // Preinit ESM modules (loads AND executes them)
  preinitModule('/modules/analytics.js');
  preinitModule('/modules/performance.js', { integrity: 'sha384-...' });

  return (
    <div>
      <h2>ESM Module Preloading (React 19)</h2>
      <p>This page demonstrates ESM module preloading:</p>
      <ul>
        <li>
          <code>preloadModule</code> - Fetch ESM module without executing
        </li>
        <li>
          <code>preinitModule</code> - Fetch and execute ESM module
        </li>
      </ul>
      <p>Check Network tab to see module loading behavior</p>
      <p>Check HTML &lt;head&gt; for modulepreload hints</p>
    </div>
  );
}
