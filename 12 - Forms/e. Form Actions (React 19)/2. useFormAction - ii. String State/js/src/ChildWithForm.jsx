/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function useFormAction(initialState, onSubmit) {
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState(initialState);
  };

  return {
    state,
    handleChange,
    handleSubmit
  };
}

function ChildWithForm(props) {
  const { state, handleChange, handleSubmit } = useFormAction(
    '', // Initial state is now a string
    props.onAdd
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        onChange={handleChange}
        value={state}
        placeholder="Enter name"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ChildWithForm;
