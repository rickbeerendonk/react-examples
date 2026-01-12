/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint no-unused-vars: off */

export default function App() {
  function handleChange(e) {
    alert('Go to Oblicum...');

    // Must be used in React:
    //e.preventDefault();

    // Cannot be used in React:
    return false;
  }

  return (
    <a onClick={handleChange} href="https://oblicum.com">
      React: oblicum.com
    </a>
  );
}
