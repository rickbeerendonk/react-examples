/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function App() {
  const ulRef = React.useRef();
  const liRef = React.useRef();

  function handleClick(nr) {
    alert(`Button ${nr} clicked!`);
  }

  React.useEffect(() => {
    // Only works in the browser's devtools:
    /*
    console.log('ul ref event-handler count: ', getEventListeners(ulRef));
    console.log('li ref event-handler count: ', getEventListeners(liRef));
    */
    //debugger;
  }, []);

  return (
    <ul ref={ulRef}>
      {[1, 2, 3].map(nr => (
        <li key={nr} style={{ margin: 5 }} onClick={handleClick} ref={liRef}>
          {nr}
        </li>
      ))}
    </ul>
  );
}

export default App;
