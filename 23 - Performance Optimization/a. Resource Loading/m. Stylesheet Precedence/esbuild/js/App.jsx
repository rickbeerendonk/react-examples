/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

function FirstComponent() {
  return (
    <>
      <link rel="stylesheet" href="first.css" precedence="high" />
      <div className="first">First Component (high precedence)</div>
    </>
  );
}

function SecondComponent() {
  return (
    <>
      <link rel="stylesheet" href="second.css" precedence="low" />
      <div className="second">Second Component (low precedence)</div>
    </>
  );
}

function ThirdComponent() {
  return (
    <>
      <link rel="stylesheet" href="third.css" precedence="high" />
      <div className="third">Third Component (high precedence)</div>
    </>
  );
}

export default function App() {
  return (
    <div>
      <h2>Stylesheet Precedence (React 19)</h2>
      <p>
        The <code>precedence</code> prop controls stylesheet ordering in
        &lt;head&gt;
      </p>
      <p>Stylesheets with same precedence are grouped together</p>

      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />

      <p>Check HTML &lt;head&gt; - stylesheets are ordered by precedence!</p>
      <p>Order: high precedence stylesheets, then low precedence</p>
    </div>
  );
}
