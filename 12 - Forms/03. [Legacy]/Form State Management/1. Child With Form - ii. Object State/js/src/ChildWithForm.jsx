/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function ChildWithForm(props) {
  // It is not unusual to have local state in components that contain a form.
  const [state, setState] = useState({ name: '' });

  function handleSubmit(e) {
    // Prevent the browser from doing the default action (and navigating away from our page/app)
    e.preventDefault();

    // Raise the onAdd event and pass the name as a parameter
    props.onAdd(state);

    // Clear the name in the state
    setState({ name: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={e => setState(s => ({ ...s, name: e.target.value }))}
        value={state.name}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ChildWithForm;
