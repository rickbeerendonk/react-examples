/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  const name = 'React';

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('input', { value: name }),
    React.createElement('h1', null, 'Hello ', name, '!')
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
