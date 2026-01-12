/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

const boxStyle = {
  border: '1px solid lightgray',
  padding: '10px',
  marginBottom: '10px'
};

function ComponentA() {
  return (
    <div style={{ ...boxStyle, backgroundColor: 'lavender' }}>
      <h3>Component A</h3>
      <script async src="does-not-exist.js" />
      <p>This component includes an async script</p>
    </div>
  );
}

function ComponentB() {
  return (
    <div style={{ ...boxStyle, backgroundColor: 'lavenderblush' }}>
      <h3>Component B</h3>
      <script async src="does-not-exist.js" />
      <p>This component includes the SAME async script</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h2>Async Script Deduplication</h2>
      <p>React automatically deduplicates async scripts</p>
      <p>
        Both components above include the same script, but React only loads it
        once.
      </p>
      <ComponentA />
      <ComponentB />
      <p>Check the results:</p>
      <ul>
        <li>Elements tab - HTML &lt;head&gt; contains only ONE script tag</li>
        <li>Network tab - script is only loaded once</li>
      </ul>
    </div>
  );
}
