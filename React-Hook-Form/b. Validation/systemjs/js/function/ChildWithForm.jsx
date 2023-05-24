/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';
import { useForm } from 'react-hook-form';

function ChildWithForm(props) {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    props.onAdd(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        {...register('name', { required: true, minLength: 2 })}
      />
      <label htmlFor="age">Age: </label>
      <input
        id="age"
        {...register('age', { required: true, min: 18, max: 67 })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ChildWithForm;
