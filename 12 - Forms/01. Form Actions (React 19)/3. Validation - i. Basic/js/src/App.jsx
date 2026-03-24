/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useState } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);

  function addUser(formData) {
    // Action only fires if HTML validation passes!
    const name = formData.get('name');
    const email = formData.get('email');
    const age = formData.get('age');

    setUsers(prev => [...prev, { name, email, age }]);
  }

  return (
    <div>
      <h2>Form Validation (Basic - HTML5)</h2>
      <p>
        Uses native HTML5 validation attributes. The action only fires when
        validation passes.
      </p>

      <form action={addUser}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            name="name"
            placeholder="Enter name"
            required
            minLength={2}
            title="Name must be at least 2 characters"
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            required
            title="Please enter a valid email address"
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="age">Age: </label>
          <input
            id="age"
            name="age"
            type="number"
            min="1"
            max="150"
            placeholder="Enter age"
            required
            title="Age must be between 1 and 150"
          />
        </div>

        <button type="submit">Add User</button>
      </form>

      <h3>Users Added:</h3>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>
            {user.name} ({user.email}) - Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
