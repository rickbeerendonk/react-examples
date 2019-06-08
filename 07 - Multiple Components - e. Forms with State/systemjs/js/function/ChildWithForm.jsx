/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function ChildWithForm(props) {
  const [name, setName] = React.useState('');

  function handleSubmit(e) {
    // Prevent the browser from doing the default action (and navigating away from our page/app)
    e.preventDefault();

    // Raise the onAdd event and pass the name as a parameter
    props.onAdd(name);

    // Clear the name in the state
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input autoFocus onChange={e => setName(e.target.value)} value={name} />
      <button>Add</button>
    </form>
  );
}

export default ChildWithForm;
