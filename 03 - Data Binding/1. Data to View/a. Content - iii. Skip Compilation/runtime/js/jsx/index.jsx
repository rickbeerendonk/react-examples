/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  return (
    <>
      <h1>Hello {'{name}'}!</h1>
      <h1>Hello &#123;name&#125;!</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
