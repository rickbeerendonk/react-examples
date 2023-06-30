/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import ClickMe from './ClickMe';

// Observe that after clicking the button, the ClickMe component
// is recreated, due to having a different key, with its initial state.

function App() {
  const [id, setId] = React.useState(0);

  function handleClick() {
    document.startViewTransition(() => {
      ReactDOM.flushSync(() => {
        setId(i => i + 1);
      });
    });
  }

  return (
    <React.Fragment>
      <button onClick={handleClick}>Change ID</button>
      <hr />
      <ClickMe key={id} id={id} />
      <br />
      <br />
      &nbsp; &nbsp; &nbsp;
      <ClickMe key={id + 1} id={id + 1} />
    </React.Fragment>
  );
}

export default App;
