/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ChildWithFormProps {
  onAdd: (name: string) => void;
}

type Inputs = {
  name: string;
};

function ChildWithForm(props: ChildWithFormProps) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<Inputs> = data => {
    // Prevent the browser from doing the default action
    // Not Needed

    // Handle data: Raise the onAdd event and pass the name as a parameter
    props.onAdd(data.name);

    // Clear data
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name: </label>
      <input id="name" {...register('name')} />
      <button>Submit</button>
    </form>
  );
}

export default ChildWithForm;
