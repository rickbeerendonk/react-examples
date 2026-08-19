/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { useState } from 'react';

export default function App() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(e.target);
    const name = formData.get('name');

    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Validation - simulate error
    if (!name || name.trim() === '') {
      setError('Name is required');
      setIsPending(false);
      return;
    }

    if (name.length < 3) {
      setError('Name must be at least 3 characters');
      setIsPending(false);
      return;
    }

    // Add to list
    setList(lst => [...lst, name]);

    // Handle success
    setIsPending(false);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" disabled={isPending} />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Submit'}
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
