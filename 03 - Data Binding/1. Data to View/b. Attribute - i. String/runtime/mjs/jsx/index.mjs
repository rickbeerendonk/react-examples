/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from './react.development.mjs';
import ReactDOM from './react-dom.development.mjs';

function App() {
  return <img alt="React" />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
