/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

function ComponentA() {
  return (
    <div>
      <h3>Component A</h3>
      <script async src="https://example.com/analytics.js" />
      <p>This component includes an async script</p>
    </div>
  );
}

function ComponentB() {
  return (
    <div>
      <h3>Component B</h3>
      <script async src="https://example.com/analytics.js" />
      <p>This component includes the SAME async script</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h2>Async Script Deduplication (React 19)</h2>
      <p>React 19 automatically deduplicates async scripts</p>
      <p>
        Both components below include the same script, but React only loads it
        once
      </p>

      <ComponentA />
      <ComponentB />

      <hr />
      <p>Check HTML &lt;head&gt; - only ONE script tag appears!</p>
      <p>Check Network tab - script is only loaded once</p>
    </div>
  );
}
