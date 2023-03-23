/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
};

function App() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<Inputs> = data => {
    // Prevent the browser from doing the default action
    // Not Needed

    // Handle data
    alert(`Name = ${data.name}`);

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

export default App;
