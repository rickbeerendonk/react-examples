/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

// NOTE: The <link> tags with precedence attribute are a React Server Components
// / Next.js feature, not standard HTML. In standard React, stylesheets need to be
// in the document <head> at initial load to apply styles.

function ComponentA() {
  return (
    <>
      <link rel="stylesheet" href="a.css" precedence="high" />
      <div style={{ backgroundColor: 'lavender' }}>
        Component A (high precedence)
      </div>
    </>
  );
}

function ComponentB() {
  return (
    <>
      <link rel="stylesheet" href="b.css" precedence="low" />
      <div style={{ backgroundColor: 'lavenderBlush' }}>
        Component B (low precedence)
      </div>
    </>
  );
}

function ComponentC() {
  return (
    <>
      <link rel="stylesheet" href="c.css" precedence="high" />
      <div style={{ backgroundColor: 'thistle' }}>
        Component C (high precedence)
      </div>
    </>
  );
}

export default function App() {
  return (
    <div>
      <h2>Stylesheet Precedence</h2>
      <p>
        The <code>precedence</code> prop controls stylesheet ordering in
        &lt;head&gt;
      </p>
      <p>Stylesheets with same precedence are grouped together</p>

      <ComponentA />
      <ComponentB />
      <ComponentC />

      <p>Check the results:</p>
      <ul>
        <li>Elements tab - stylesheets are ordered by precedence</li>
        <li>
          Console tab - stylesheets with same precedence are grouped together
        </li>
      </ul>
    </div>
  );
}
