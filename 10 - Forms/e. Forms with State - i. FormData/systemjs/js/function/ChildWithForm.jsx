/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';

function ChildWithForm(props) {
  // No local state

  function handleSubmit(e) {
    // Prevent the browser from doing the default action (and navigating away from our page/app)
    e.preventDefault();

    // Get the form values (using only event info to access form values).
    const form = e.target;
    const formData = new FormData(form);

    // Raise the onAdd event and pass the name as a parameter
    props.onAdd(formData.get('name'));

    // Clear the name in the state
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input autoFocus name="name" />
      <button type="submit">Add</button>
    </form>
  );
}

export default ChildWithForm;
