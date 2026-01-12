/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();

  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 8 characters
      </p>
    </>
  );
}

export default function App() {
  return (
    <form>
      <PasswordField />
      <hr />
      <PasswordField />
    </form>
  );
}
