/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  const names = ['Alexandra', 'Benjamin', 'Charlotte'];

  return (
    <>
      <h1>Greetings</h1>
      <ul>
        {do {
          // Only last name is returned [WIP]
          for (const name of names) {
            <li key={name}>Hello {name}</li>;
          }
        }}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
