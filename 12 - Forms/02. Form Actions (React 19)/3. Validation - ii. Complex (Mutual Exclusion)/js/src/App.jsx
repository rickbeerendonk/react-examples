/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [errors, setErrors] = useState({});

  function addContact(formData) {
    const phone = formData.get('phone')?.trim();
    const email = formData.get('email')?.trim();

    // Complex validation: Exactly ONE must have a value
    const newErrors = {};

    const hasPhone = phone && phone.length > 0;
    const hasEmail = email && email.length > 0;

    // Both empty - error
    if (!hasPhone && !hasEmail) {
      newErrors.general =
        'You must provide either a phone number OR an email address';
    }
    // Both filled - error
    else if (hasPhone && hasEmail) {
      newErrors.general =
        'You must provide ONLY ONE contact method (phone OR email, not both)';
    }
    // Validate individual fields when provided
    else {
      if (hasPhone && phone.length < 10) {
        newErrors.phone = 'Phone number must be at least 10 digits';
      }
      if (hasEmail && !email.includes('@')) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // If there are errors, display them and don't add the contact
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and add contact
    setErrors({});
    const contactMethod = hasPhone
      ? { type: 'Phone', value: phone }
      : { type: 'Email', value: email };
    setContacts(prev => [...prev, contactMethod]);
  }

  return (
    <div>
      <h2>Form Validation (Complex - Mutual Exclusion)</h2>
      <p>
        <strong>Rule:</strong> Provide exactly ONE contact method (Phone OR
        Email, but not both, and not neither)
      </p>

      <form action={addContact}>
        {errors.general && (
          <div
            style={{
              color: 'red',
              backgroundColor: '#ffebee',
              padding: '0.8rem',
              marginBottom: '1rem',
              borderRadius: '4px',
              border: '1px solid red'
            }}
          >
            <strong>⚠️ {errors.general}</strong>
          </div>
        )}

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="phone">Phone Number: </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter phone (or leave empty)"
          />
          {errors.phone && (
            <div style={{ color: 'red', fontSize: '0.9rem' }}>
              {errors.phone}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email Address: </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email (or leave empty)"
          />
          {errors.email && (
            <div style={{ color: 'red', fontSize: '0.9rem' }}>
              {errors.email}
            </div>
          )}
        </div>

        <button type="submit">Add Contact</button>
      </form>

      <h3>Contacts Added:</h3>
      <ul>
        {contacts.map((contact, idx) => (
          <li key={idx}>
            <strong>{contact.type}:</strong> {contact.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
