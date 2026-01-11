/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { useState } from 'react';

export default function FormComponent() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            data-testid="name-input"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            data-testid="email-input"
          />
        </div>
        <button type="submit" data-testid="submit-button">
          Submit
        </button>
      </form>
      {formData.name && formData.email && (
        <p data-testid="success-message">Form data received</p>
      )}
    </div>
  );
}
