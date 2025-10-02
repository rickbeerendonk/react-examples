/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { prefetchDNS, preconnect, preload, preinit } from 'react-dom';

export default function App() {
  // Prefetch DNS for external domains
  prefetchDNS('https://fonts.googleapis.com');

  // Preconnect to server (DNS + TCP + TLS)
  preconnect('https://cdn.example.com');

  // Preload specific resources
  preload('https://fonts.googleapis.com/css2?family=Roboto', { as: 'style' });
  preload('/images/hero.jpg', { as: 'image' });
  preload('/fonts/custom-font.woff2', { as: 'font', crossOrigin: 'anonymous' });

  // Preinit: Load and execute script immediately
  preinit('/scripts/analytics.js', { as: 'script' });

  return (
    <div>
      <h2>Resource Preloading APIs (React 19)</h2>
      <p>This page uses React DOM resource preloading functions:</p>
      <ul>
        <li>
          <code>prefetchDNS</code> - Prefetch DNS for external domains
        </li>
        <li>
          <code>preconnect</code> - Early connection to servers
        </li>
        <li>
          <code>preload</code> - Preload stylesheets, fonts, images
        </li>
        <li>
          <code>preinit</code> - Load and execute scripts eagerly
        </li>
      </ul>
      <p>Open DevTools Network tab to see resource loading</p>
      <p>Check HTML &lt;head&gt; to see injected preload hints</p>
    </div>
  );
}
