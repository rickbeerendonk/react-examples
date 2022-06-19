/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from './react.development.mjs';
import ReactDOM from './react-dom.development.mjs';

function App() {
  const name = 'React';

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('input', { value: name }),
    React.createElement('h1', null, 'Hello ', name, '!')
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
