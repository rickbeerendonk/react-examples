/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function ChildWithForm(props) {
  // It is not unusual to have local state in components that contain a form.
  const [name, setName] = useState('');

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
      <input onChange={e => setName(e.target.value)} value={name} />
      <button type="submit">Add</button>
    </form>
  );
}

export default ChildWithForm;
