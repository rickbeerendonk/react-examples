/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function useFormAction(initialState, onSubmit) {
  const [state, setState] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(state);
    setState(initialState);
  }

  return {
    state,
    handleChange,
    handleSubmit
  };
}

function ChildWithForm(props) {
  const { state, handleChange, handleSubmit } = useFormAction(
    { name: '', email: '' },
    props.onAdd
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        onChange={handleChange}
        value={state.name}
        placeholder="Enter name"
      />
      <input
        name="email"
        onChange={handleChange}
        value={state.email}
        placeholder="Enter email"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ChildWithForm;
