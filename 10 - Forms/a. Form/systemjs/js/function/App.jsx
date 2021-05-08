/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

function App() {
  // Keep form data in state
  const [name, setName] = React.useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    // Prevent the browser from doing the default action (and navigating away from our page/app)
    e.preventDefault();

    // Handle data
    alert(`Name = ${name}`);

    // Clear data
    setName('');

    // Remember, cannot be used in React (use e.preventDefault() instead):
    //return false;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input id="name" onChange={handleChange} value={name} />
      <button>Submit</button>
    </form>
  );
}

export default App;
