/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  const fontSize = 48;
  const fontStyle = 'italic';

  return (
    <h1 style={{ fontSize, fontStyle, textDecoration: 'underline' }}>
      Hello React!
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
