/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from './react.development.mjs';
import ReactDOM from './react-dom.development.mjs';

function App() {
  return (
    <h1
      style={{
        fontSize: 48,
        fontStyle: 'italic',
        textDecoration: 'underline'
      }}
    >
      Hello React!
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
