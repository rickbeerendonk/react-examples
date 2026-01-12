/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useState } from 'react';

export default function App() {
  const [messages, setMessages] = useState([]);

  async function handleSubmit(formData) {
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 1000));

    const name = formData.get('name');
    const message = formData.get('message');

    setMessages(prev => [...prev, { name, message }]);
  }

  return (
    <div>
      <h2>Form Action (React 19)</h2>
      <p>
        The &lt;form&gt; action prop accepts a function and auto-resets after
        submission
      </p>

      {/* React 19: action prop accepts a function */}
      <form action={handleSubmit}>
        <input type="text" name="name" placeholder="Your name" required />
        <br />
        <textarea name="message" placeholder="Your message" required />
        <br />
        <button type="submit">Send Message</button>
      </form>

      <h3>Messages:</h3>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>
            <strong>{msg.name}:</strong> {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
