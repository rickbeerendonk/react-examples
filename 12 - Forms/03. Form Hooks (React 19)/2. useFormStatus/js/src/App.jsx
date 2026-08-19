/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

export default function App() {
  async function handleSubmit(formData) {
    // Simulate async submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    const name = formData.get('name');
    alert(`Submitted: ${name}`);
  }

  return (
    <div>
      <h2>useFormStatus Example</h2>
      <p>The submit button uses useFormStatus to show pending state</p>

      <form action={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" required />
        <br />
        <SubmitButton />
      </form>
    </div>
  );
}
