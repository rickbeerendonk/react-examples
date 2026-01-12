/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { useActionState, useState } from 'react';

export default function App() {
  const [list, setList] = useState([]);

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const name = formData.get('name');

      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Validation - simulate error
      if (!name || name.trim() === '') {
        return { error: 'Name is required' };
      }

      if (name.length < 3) {
        return { error: 'Name must be at least 3 characters' };
      }

      // Add to list
      setList(lst => [...lst, name]);

      // Handle success
      return { error: null };
    },
    // Initial state
    { error: null }
  );

  return (
    <>
      <form action={submitAction}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" disabled={isPending} />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Submit'}
        </button>
        {error?.error && <div style={{ color: 'red' }}>{error.error}</div>}
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
