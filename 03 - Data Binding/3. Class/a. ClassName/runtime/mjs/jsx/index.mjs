/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from './react.development.mjs';
import ReactDOM from './react-dom.development.mjs';

function App() {
  return <h1 className="first second">Hello React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
