/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    // Prevent the browser from doing the default action
    // Not Needed

    // Handle data
    alert(`Name = ${data.name}`);

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

export default App;
