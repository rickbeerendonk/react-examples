/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useForm } from 'react-hook-form';

function ChildWithForm(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

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
      {errors.name && (
        <p className="error">
          Name is required and should be at least 2 characters
        </p>
      )}

      <label htmlFor="age">Age: </label>
      <input
        id="age"
        {...register('age', { required: true, min: 18, max: 67 })}
        type="number"
      />
      {errors.age && (
        <p className="error">Age is required and should be between 18 and 67</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default ChildWithForm;
