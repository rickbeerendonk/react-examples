/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';
import { useForm } from 'react-hook-form';

function ChildWithForm(props) {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    // Prevent the browser from doing the default action
    // Not Needed

    // Handle data: Raise the onAdd event and pass the name as a parameter
    props.onAdd(data.name);

    // Clear data
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name: </label>
      <input id="name" {...register('name')} />
      <button>Submit</button>
    </form>
  );
}

export default ChildWithForm;
